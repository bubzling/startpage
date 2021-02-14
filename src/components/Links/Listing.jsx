import React from "react";
import PropTypes from "prop-types";
import LinkCard from "../linkCard/LinkCard";

/*
    component listing all the LinksCard by their categories
*/

const Listing = (props) => {
  const { list, deleteCat, linkOp } = props;

  // render each card
  const renderCard = () =>
    list.map((data, i) => (
      <LinkCard
        key={i}
        id={i}
        data={data}
        deleteCat={deleteCat} linkOp={linkOp}
      />
    ));

  return (
    <div>
      <br /> <br />
      {renderCard()}
    </div>
  );
};

Listing.propTypes = {
  list: PropTypes.array.isRequired,
  addLink: PropTypes.func.isRequired,
  deleteCat: PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired,
  deleteLink: PropTypes.func.isRequired,
};

export default Listing;
