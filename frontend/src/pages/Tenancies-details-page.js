import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pages.css";
import { TenancyDetails } from "../components/Tenancy-details";

export const TenanciesDetailsPage = () => {
  const [tenancy, setTenancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/tenancy/" + id);
      const result = await response.json();
      setTenancy(result);
    })();
  }, [id]);

  const editItems = (id, value) => {
    setTenancy((stateEdit) => {
      return stateEdit.map((tenancy) => {
        if (tenancy.id === id) {
          return {
            ...tenancy,
            description: value.newDescription,
            address: value.newAaddress,
            size: value.newSize,
            rooms: value.newRooms,
          };
        }
        return tenancy;
      });
    });
  };

  const deleteItems = (id) => {
    setTenancy((stateDelete) => {
      const deletedItem = stateDelete.filter((tenancy) => tenancy.id !== id);
      return deletedItem;
    });
  };
  return (
    <>
      <div className="tenancy-list">
        {tenancy &&
          tenancy.map((t) => (
            <TenancyDetails
              key={t.id}
              {...t}
              onEdit={editItems}
              onDelete={deleteItems}
            />
          ))}
      </div>
    </>
  );
};
