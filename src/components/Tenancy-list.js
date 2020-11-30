import React from "react";
import { CardColumns } from "react-bootstrap";
import TenancyItem from "./Tenancy-item";
import PropTypes from "prop-types";

const TenancyList = ({ data = [] }) => {
  const TenancyItems = data.map((item) => (
    <TenancyItem key={item.id} tenancy={item} />
  ));
  return <CardColumns>{TenancyItems}</CardColumns>;
};

TenancyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(TenancyItem.propTypes)),
};

export default TenancyList;
