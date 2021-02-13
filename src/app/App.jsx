import React, { useState } from "react";
import PropTypes from "prop-types";

import Listing from "../components/Links/Listing";
import SearchBar from "../components/Search/SearchBar";
import CatCreate from "../components/CatCreate/CatCreate";

import useStyles from "./App.style";

import { Box, Button, Container, Typography,  Grid } from "@material-ui/core";

const App = (props) => {
  const { list, categoryOp, linkOp } = props;
  const [catDialog, setCatDialog] = useState(false);

  const toggleCatDialog = () => setCatDialog(!catDialog);

  const classes = useStyles();
  return (
    // bg has image
    // main container has a darker
    <Grid container className={classes.contentContainer}>
      <Grid item xs={4} className={classes.contentBackground}>
        <Box className={classes.content}>

        <Typography variant='h2'>Another Start page</Typography>
        <Typography variant='h4'>but where is the rice</Typography>

        {/* add new category */}
        <Button variant='contained' onClick={toggleCatDialog}>
          Add Category
        </Button>
        <CatCreate open={catDialog} addCat={categoryOp.addCat} />

        {/* all links stuff */}
        <Listing list={list} deleteCat={categoryOp.deleteCat} linkOp={linkOp} />

        {/* search bar */}
        <SearchBar />
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
