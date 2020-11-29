import React, { useState, useEffect } from "react";
//import AddTenancyForm from "./Add-tenancy";
import TenancyList from "./Tenancy-list";

export const Portfolio = ({ list = [] }) => {
  const [tenancies, setTenancies] = useState(list);

  useEffect(() => {
    const baseUrl =
      "https://gist.githubusercontent.com/panivita/0a86aa14bf72404e8609887f17466509/raw";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setTenancies(data))
      .catch((err) => console.log(err));
  }, []);

  const addTenancy = (val) => {
    setTenancies((tenancy) => {
      const item = {
        id: tenancy[tenancy.length - 1]?.id + 1 || 1,
        imageUrl: val.imageUrl,
        address: val.address,
        size: val.size,
        rooms: val.rooms,
      };
      return [...tenancy, item];
    });
  };

  const deleteItems = (id) => {
    setTenancies((stateDelete) => {
      const deletedItem = stateDelete.filter((tenancy) => tenancy.id !== id);
      return deletedItem;
    });
  };
  const editItems = (id, value) => {
    setTenancies((stateEdit) => {
      return stateEdit.map((tenancy) => {
        if (tenancy.id === id) {
          return {
            ...tenancy,
            imageUrl: value,
            address: value,
            size: value,
            rooms: value,
          };
        }
        return tenancy;
      });
    });
  };
  return (
    <section className="tenancy-list">
      {/*<AddTenancyForm onSubmit={addTenancy} />*/}
      <TenancyList data={tenancies} onDelete={deleteItems} onEdit={editItems} />
    </section>
  );
};
