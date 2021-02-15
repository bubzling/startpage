import React, { useState } from "react";
import PropTypes from "prop-types";

import List from "../../components/list/List";
import SearchBar from "../../components/Search/SearchBar";

import { Box, Typography, ButtonBase } from "@material-ui/core";
import styles from "./Default.style";

const Default = (props) => {
  const { list, categoryOp, linkOp } = props;
  const [catDialog, setCatDialog] = useState(false);
  const toggleCatDialog = () => setCatDialog(!catDialog);

  const classes = styles();
  return (
    <>
      {/* body */}
      <div className={classes.box}>
        {/* add new category */}
        <ButtonBase onClick={toggleCatDialog}>
          <Typography className={classes.link}>/add_category.sh</Typography>
        </ButtonBase>

        {/* all links stuff */}
        <List list={list} deleteCat={categoryOp.deleteCat} linkOp={linkOp} />
      </div>

      {/* search bar */}
      <SearchBar className={classes.box} />
    </>
  );
};

Default.propTypes = {};

export default Default;
