import React from "react";
import PropTypes from "prop-types";
import Category from "../at/Category";

/*
    component listing all the LinksCard by their categories
*/

const List = (props) => {
  const { list, deleteCat, linkOp } = props;

  // render each card
  return list.map((data, i) => (
    <Category
      key={i}
      id={i}
      data={data}
      deleteCat={deleteCat}
      linkOp={linkOp}
    />
  ));
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  addLink: PropTypes.func.isRequired,
  deleteCat: PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired,
  deleteLink: PropTypes.func.isRequired,
};

export default List;
