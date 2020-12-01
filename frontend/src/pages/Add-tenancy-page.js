import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./pages.css";

export const AddTenancyFormPage = ({onSubmit}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(imageUrl, address, size, rooms);
  };
  return (
    <Form className="tenancy-list" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          name="imageUrl"
          placeholder="Image url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
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
