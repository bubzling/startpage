import React from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PropTypes from "prop-types";

import { ButtonBase } from '@material-ui/core'
import CatInput from "./CatInput"
import styles from './CatCreate.style'

/* 
  component used in 
*/
const CatAdd = (props) => {
  const classes = styles();
  const { catDialog, addCat, toggleCatDialog } = props;
  
  return (
    <div>
      <div>

      <ButtonBase className={classes.button} variant='contained' onClick={toggleCatDialog}>
        <AddCircleOutlineOutlinedIcon />
      </ButtonBase>

      </div>
      <CatInput open={catDialog} addCat={addCat} />
    </div>
  );
};

CatAdd.propTypes = {};

export default CatAdd;
