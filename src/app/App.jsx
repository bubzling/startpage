import React, { useState } from "react";
import PropTypes from "prop-types";

import List from "../components/list/List";
import SearchBar from "../components/Search/SearchBar";
import CatAdd from "../components/CatCreate/CatAdd";

import useStyles from "./App.style";

import { Box, Typography, Grid, } from "@material-ui/core";

const App = (props) => {
  const { list, categoryOp, linkOp } = props;
  const [catDialog, setCatDialog] = useState(false);

  const toggleCatDialog = () => setCatDialog(!catDialog);

  const classes = useStyles();
  return (
    // bg has image
    // main container has a darker
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.contentBackground}>
        <Box className={classes.content}>
          {/* title */}
          <div className={classes.box}>
            <Typography variant='h3'>Another Start page</Typography>
            <Typography variant='h6'>
              by a <a className={classes.link} target="_blank" href="https://github.com/deBubz/startpage">little ol me</a>
            </Typography>
          </div>

          {/* body */}
          <div className={classes.box}>
            {/* add new category */}
            <CatAdd
              catDialog={catDialog}
              toggleCatDialog={toggleCatDialog}
              addCat={categoryOp.addCat}
            />
            {/* all links stuff */}
            <List
              list={list}
              deleteCat={categoryOp.deleteCat}
              linkOp={linkOp}
            />
          </div>

          {/* search bar */}
          <SearchBar className={classes.box}/>
        </Box>
      </Grid>
    </Grid>
  );
};

App.propTypes = {
  list: PropTypes.array.isRequired,
  categoryOp: PropTypes.exact({
    addCat: PropTypes.func.isRequired,
    deleteCat: PropTypes.func.isRequired,
  }).isRequired,
  linkOp: PropTypes.exact({
    addLink: PropTypes.func.isRequired,
    updateLink: PropTypes.func.isRequired,
    deleteLink: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
