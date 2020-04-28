import React from 'react';

import UrlLists from './components/UrlLists';
import SearchBar from './components/SearchBar';

import Grid from '@material-ui/core/Grid'
import './AppStyle.css'
/*
  Main container for launchpad
*/

function App() {
  return (
    <Grid className="container">
      eya this is a shitty start page
      <UrlLists />
      <SearchBar />
    </Grid>
  );
}

export default App;
