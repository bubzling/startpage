import React from 'react';

import UrlLists from './components/UrlLists';
import SearchBar from './components/SearchBar';

import Grid from '@material-ui/core/Grid'
/*
  Main container for launchpad
*/

const App = props => {
  return (
    <Grid className="container">
      eya this is a shitty start page
      <UrlLists />
      <SearchBar />
    </Grid>
  );
}

export default App;
