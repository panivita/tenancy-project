import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./pages.css";

export const AddTenancyFormPage = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/tenancy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        description: description,
        address: address,
        size: size,
        rooms: rooms,
      }),
    });
    history.push("/");
  };
  return (
    <Form noValidate className="tenancy-list" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          name="url"
          placeholder="Image url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
                  key={id + tekst}
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
          as="textarea"
          rows={5}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Size"
          name="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          name="rooms"
          placeholder="Rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" variant="info">
        Submit
      </Button>
    </Form>
  );
};
