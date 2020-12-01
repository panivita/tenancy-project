import React, { useState } from "react";
import { Media, Image, Button, FormControl, InputGroup } from "react-bootstrap";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import { StreetView } from "./Street-view";

export const TenancyDetails = ({
  id,
  imageUrl,
  address,
  size,
  rooms,
  description,
  onEdit,
  onDelete,
}) => {
  const [edit, setEdit] = useState(false);
  const [newDescription, setDescription] = useState(description);
  const [newAaddress, setAddress] = useState(address);
  const [newSize, setSize] = useState(size);
  const [newRooms, setRooms] = useState(rooms);
  return (
    <>
      <Media style={{ textAlign: "left" }}>
        <Image src={imageUrl} thumbnail />
        <Media.Body>
          {edit ? (
            <>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  required="required"
                  value={newAaddress}
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
      <StreetView address={address} />
      <div className="button-container">
        {edit ? (
          <Button
            variant="info"
            onClick={() => {
              onEdit(id, { newRooms, newAaddress, newDescription, newSize });
              setEdit(false);
            }}
            style={{ marginRight: "5%" }}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="info"
            onClick={() => setEdit(true)}
            style={{ marginRight: "5%" }}
          >
            <PencilSquare style={{ marginRight: "5px" }} />
            Edit
          </Button>
        )}
        <Button variant="info" onClick={() => onDelete(id)}>
          <Trash style={{ marginRight: "5px" }} />
          Delete
        </Button>
      </div>
    </>
  );
};
