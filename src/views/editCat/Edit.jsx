import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Edit = (props) => {
  const { id } = props;
  return (
    <div>
      <Typography>changin {id}</Typography>
    </div>
  );
};

Edit.propTypes = {};

export default Edit;
