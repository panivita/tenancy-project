import React, { useState } from "react";
import PropTypes from "prop-types";

const TenancyItem = ({ tenancy, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState(tenancy.imageUrl);
  const [address, setAddress] = useState(tenancy.address);
  const [size, setSize] = useState(tenancy.size);
  const [rooms, setRooms] = useState(tenancy.rooms);

  return (
    <>
      edit ? (
      <>
        <input
          type="text"
          required="required"
          minLength="3"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          required="required"
          minLength="3"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
      </>
      ) : (<></>)
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
    </>
  );
};
