import React from "react";
import PropTypes from "prop-types";

import { Button } from '@material-ui/core'
import CatInput from "./CatInput"

const CatAdd = (props) => {
  const { catDialog, addCat, toggleCatDialog } = props;
  return (
    <div>
      <Button variant='contained' onClick={toggleCatDialog}>
        +
      </Button>
      <CatInput open={catDialog} addCat={addCat} />
    </div>
  );
};

CatAdd.propTypes = {};

export default CatAdd;
