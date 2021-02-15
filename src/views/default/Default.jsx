import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../../components/Search/SearchBar";

import { Typography, ButtonBase } from "@material-ui/core";
import styles from "./Default.style";
import Category from "../../components/cat/Category";

const Default = (props) => {
  const { list, categoryOp, linkOp, modeOp } = props;
  const { toggleAddMode } = modeOp;

  // render link groups on the main page
  const renderLinks = () =>
    list.map((data, i) => (
      <Category
        key={i}
        id={i}
        data={data}
        modeOp={modeOp}
      />
    ));

  const classes = styles();
  return (
    <>
      {/* body */}
      <div className={classes.box}>
        {/* add new category */}
        <ButtonBase onClick={toggleAddMode}>
          <Typography className={classes.link}>/add_category.sh</Typography>
        </ButtonBase>

        {/* all links stuff */}
        { renderLinks() }
      </div>

      {/* search bar */}
      <SearchBar className={classes.box} />
    </>
  );
};

Default.propTypes = {};

export default Default;
