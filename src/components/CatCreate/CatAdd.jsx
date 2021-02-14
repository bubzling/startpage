import React from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PropTypes from "prop-types";

import { ButtonBase, Typography } from '@material-ui/core'
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

      <ButtonBase className={classes.button} onClick={toggleCatDialog}>
        <Typography>
          /add_category.sh
          </Typography>
      </ButtonBase>

      {/* chuck this into dialogue */}
      <CatInput open={catDialog} addCat={addCat} />
    </div>
  );
};

CatAdd.propTypes = {};

export default CatAdd;
