import React from "react";
import { Card, CardColumns, Button } from "react-bootstrap";
import Plus from "../images/Plus.svg";
import TenancyItem from "./Tenancy-item";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const TenancyList = ({ data = [], onDelete, onEdit}) => {
  const history = useHistory();
  const TenancyItems = data.map((item) => (
    <TenancyItem
      key={item.id}
      tenancy={item}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
  return (
    <CardColumns>
      {TenancyItems}
      <Card>
        <Card.Img variant="top" src={Plus} className="image-plus" />
        <Card.Body>
          <Button onClick={() => history.push("/add_tenancy")} variant="info">
            Add new tenancy
          </Button>
        </Card.Body>
      </Card>
    </CardColumns>
  );
};

TenancyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(TenancyItem.propTypes)),
};

export default TenancyList;
