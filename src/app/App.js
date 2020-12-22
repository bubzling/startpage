import React, { useState } from 'react';

import UrlLists from '../components/Links/UrlLists';
import SearchBar from '../components/Search/SearchBar';

import sampleData from './sample'

import Grid from '@material-ui/core/Grid'
/*
  Main container for launchpad
*/
console.log("Samle", sampleData)

const App = props => {
  const [ list, setList ] =  useState(sampleData);

  // ======================================================================
  // save on every crud action
  const save = () => {}
  // load once on startup
  const load = () => {}


  // create
  // read
  // update 
  // delete

  // ======================================================================


  return (
    <Grid className="container">
      eya this is a shitty start page
      <UrlLists list={list}/>
      <SearchBar />
    </Grid>
  );
}

export default App;
