import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TenancyItem = ({ tenancy }) => {
  const history = useHistory();
  return (
    <Card>
      <Card.Img variant="top" src={tenancy.url} />
      <Card.Body>
        <Card.Title>{tenancy.address}</Card.Title>
        <Card.Text>
          <b>Size:</b> {tenancy.size} m<sup>2</sup>
        </Card.Text>
        <Card.Text>
          <b>Rooms:</b> {tenancy.rooms}
        </Card.Text>
        <Button
          onClick={() => history.push("/tenancy/" + tenancy.id)}
          variant="info"
        >
          See details
        </Button>
      </Card.Body>
    </Card>
  );
};
export default TenancyItem;

TenancyItem.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  address: PropTypes.string,
  size: PropTypes.number,
  rooms: PropTypes.number,
};
