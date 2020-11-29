import React from "react";
import TenancyItem from "./Tenancy-item";
import PropTypes from "prop-types";

const TenancyList = ({ data = [], onDelete, onEdit }) => {
  const TenancyItems = data.map((item) => (
    <TenancyItem
      key={item.id}
      tenancy={item}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
  return <ul className="itemsList">{TenancyItems}</ul>;
};

TenancyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(TenancyItem.propTypes)),
};

export default TenancyList;
