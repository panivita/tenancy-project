import React, { useState, useEffect } from "react";
import { Media, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const TenanciesDetails = ({ imageUrl, address, size, rooms }) => (
  <Media style={{ textAlign: "left" }}>
    <Image src={imageUrl} thumbnail />
    <Media.Body>
      <h3>{address}</h3>
      <p>
        <b>Size:</b> {size} m<sup>2</sup>
      </p>
      <p>
        <b>Rooms:</b> {rooms}
      </p>
    </Media.Body>
  </Media>
);
export const TenanciesDetailsPage = ({ onDelete, onEdit }) => {
  const [tenancy, setTenancy] = useState();
  /*const [edit, setEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState(tenancy.imageUrl);
  const [address, setAddress] = useState(tenancy.address);
  const [size, setSize] = useState(tenancy.size);
  const [rooms, setRooms] = useState(tenancy.rooms);*/
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const baseUrl =
        "https://gist.githubusercontent.com/panivita/0a86aa14bf72404e8609887f17466509/raw";
      const response = await fetch(baseUrl);
      const result = await response.json();
      const tenancyById = result.filter((t) => t.id == id);
      console.log(tenancyById);
      setTenancy(tenancyById);
    })();
  }, [id]);
  
  return (
    <div className="booking-container">
      {tenancy && tenancy.map((t) => <TenanciesDetails key={t.id} {...t} />)}
    </div>
    /*edit ? (
      <>
        <input
          type="number"
          required="required"
          minLength="3"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="number"
          required="required"
          minLength="3"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
      </>
      ) : ({" "}
      )}
      {edit ? (
        <button
          onClick={() => {
            onEdit(tenancy.id, rooms, size);
            setEdit(false);
          }}
        >
          Update
        </button>
      ) : (
        <button onClick={() => setEdit(true)}>Edit</button>
      )}
    </>*/
  );
};
