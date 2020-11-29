import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import "./pages.css";

export const AddTenancyFormPage = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const baseUrl = `https://dawa.aws.dk/autocomplete?q=${address}`;
    if (!address || address.length < 2) {
      setOptions([]);
      setDisplay(false);
      return;
    }
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        setDisplay(true);
      })
      .catch((err) => console.log(err));
  }, [address]);

  return (
    <Form className="add-tenancy-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.File.Input
          type="file"
          name="imageUrl"
          ref={register({ required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="address"
          placeholder="Address"
          ref={register({
            required: true,
            minLength: 2,
            maxLength: 25,
            pattern: /^[A-Za-z]+$/i,
          })}
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        ></Form.Control>

        {display && (
          <ul className="auto-adress-container">
            {options ? (
              options.map(({ id, tekst }) => (
                <li
                  onClick={() => {
                    setAddress(tekst);
                    setDisplay(false);
                  }}
                  className="options"
                  key={id}
                  tabIndex="0"
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span>{tekst}</span>
                </li>
              ))
            ) : (
              <li className="users">No results found</li>
            )}
          </ul>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          name="size"
          placeholder="Size"
          ref={register({ required: true, min: 1, max: 3 })}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          name="rooms"
          placeholder="Rooms"
          ref={register({
            required: true,
            min: 1,
            max: 2,
          })}
        ></Form.Control>
      </Form.Group>

      <Button type="submit" variant="info">
        Submit
      </Button>
    </Form>
  );
};
