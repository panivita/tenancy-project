import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Media, Image, Button, FormControl, InputGroup } from "react-bootstrap";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import { StreetView } from "./Street-view";

export const TenancyDetails = ({
  id,
  url,
  address,
  size,
  rooms,
  description,
}) => {
  const [edit, setEdit] = useState(false);
  const [newDescription, setDescription] = useState(description);
  const [newAddress, setAddress] = useState(address);
  const [newSize, setSize] = useState(size);
  const [newRooms, setRooms] = useState(rooms);
  const history = useHistory();

  const onEdit = () => {
    fetch("/api/tenancy/" + id, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        address: newAddress,
        description: newDescription,
        size: newSize,
        rooms: newRooms,
      }),
    }).catch((err) => {
      console.error(err);
    });
  };
  const onDelete = () => {
    fetch("/api/tenancy/" + id, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    }).catch((err) => {
      console.error(err);
    });
    history.push("/");
  };
  return (
    <>
      <Media style={{ textAlign: "left" }}>
        <Image src={url} thumbnail />
        <Media.Body>
          {edit ? (
            <>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  required="required"
                  value={newAddress}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  as="textarea"
                  rows={5}
                  type="text"
                  required="required"
                  value={newDescription}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  type="number"
                  required="required"
                  value={newSize}
                  onChange={(e) => setSize(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  type="number"
                  required="required"
                  minLength="1"
                  value={newRooms}
                  onChange={(e) => setRooms(e.target.value)}
                />
              </InputGroup>
            </>
          ) : (
            <>
              <h3>{address}</h3>
              <p>{description}</p>
              <p>
                <b>Size:</b> {size} m<sup>2</sup>
              </p>
              <p>
                <b>Rooms:</b> {rooms}
              </p>
            </>
          )}
        </Media.Body>
      </Media>

      <div className="button-container">
        {edit ? (
          <>
            <Button
              variant="info"
              onClick={() => {
                onEdit(id, address, size, rooms, description);
                setEdit(false);
              }}
              style={{ marginRight: "5%" }}
            >
              Update
            </Button>
            <Button variant="info" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="info"
              onClick={() => setEdit(true)}
              style={{ marginRight: "5%" }}
            >
              <PencilSquare style={{ marginRight: "5px" }} />
              Edit
            </Button>
            <Button variant="info" onClick={() => onDelete()}>
              <Trash style={{ marginRight: "5px" }} />
              Delete
            </Button>
          </>
        )}
      </div>
      <div className="street-view-container">
        <StreetView address={address} />
      </div>
    </>
  );
};
