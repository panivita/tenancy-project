import React, { useState, useEffect } from "react";
import TenancyList from "./Tenancy-list";
import { Card, Button } from "react-bootstrap";
import Plus from "../images/Plus.svg";
import { useHistory } from "react-router-dom";

export const Portfolio = ({ list = [] }) => {
  const [tenancies, setTenancies] = useState(list);
  const history = useHistory();

  useEffect(() => {
    fetch("api/tenancy")
      .then((res) => res.json())
      .then((data) => setTenancies(data))
      .catch((err) => console.log(err));
  }, []);

  const addTenancy = (val) => {
    setTenancies((tenancy) => {
      const item = {
        id: tenancy[tenancy.length - 1]?.id + 1 || 1,
        url: val.url,
        address: val.address,
        size: val.size,
        rooms: val.rooms,
      };
      return [...tenancy, item];
    });
  };

  return (
    <section className="tenancy-list">
      <TenancyList data={tenancies} />
      <Card className="new-tenancy-card">
        <Card.Img variant="top" src={Plus} className="image-plus" />
        <Card.Body style={{ textAlign: "center" }}>
          <Button onClick={() => history.push("/add_tenancy")} variant="info">
            Add new tenancy
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};
