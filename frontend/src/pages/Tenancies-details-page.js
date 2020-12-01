import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pages.css";
import { TenancyDetails } from "../components/Tenancy-details";

export const TenanciesDetailsPage = () => {
  const [tenancy, setTenancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const baseUrl =
        "https://gist.githubusercontent.com/panivita/0a86aa14bf72404e8609887f17466509/raw";
      const response = await fetch(baseUrl);
      const result = await response.json();
      const tenancyById = result.filter((t) => t.id == id);
      setTenancy(tenancyById);
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
  );
};
