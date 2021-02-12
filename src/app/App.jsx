import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Listing from "../components/Links/Listing";
import SearchBar from "../components/Search/SearchBar";
import CatCreate from "../components/CatCreate/CatCreate";

import { Box, Button, Container, Typography } from "@material-ui/core";

const App = props => {
    const { list, categoryOp, linkOp } = props;
    const [catDialog, setCatDialog ] = useState(false);

    const toggleCatDialog = () => setCatDialog(!catDialog);
    
    return (
    <div>
      <Box>
        <Typography variant="h1">Another Start page</Typography>
        <Typography variant="h4">but where is the rice</Typography>

        {/* add new category */}
        <Button variant='contained' onClick={toggleCatDialog}>
          Add Category
        </Button>
        <CatCreate open={catDialog} addCat={categoryOp.addCat} />
        
        {/* all links stuff */}
        <Listing
          list={list}
          deleteCat={categoryOp.deleteCat}
          linkOp={linkOp}
        />

        {/* search bar */}
        <SearchBar /> 
      </Box>
    </div>
    )
}

App.propTypes = {

}

export default App
