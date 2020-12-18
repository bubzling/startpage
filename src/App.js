import React, { useState } from 'react';

import UrlLists from './components/UrlLists';
import SearchBar from './components/SearchBar';

import Grid from '@material-ui/core/Grid'
/*
  Main container for launchpad
*/

const App = props => {
  const [list, setList] = useState([
    {
      groupName: "School",
      links: [ { text: 'Mail', url: 'email.itd.uts.edu.au/email/' }, { text: 'BlackBoard', url: 'online.uts.edu.au/webapps/login/' }, { text: 'Canvas', url: 'canvas.uts.edu.au/' }, { text: 'Github', url: 'github.com/' }, ]
    },
    {
      groupName: "Chill",
      links: [ { text: 'youtube', url: 'www.youtube.com/' }, { text: 'reddit', url: 'reddit.com/' }, { text: 'twitch', url: 'www.twitch.tv/' }, { text: 'primetv', url: 'primevideo.com/' }, ]
    }
  ]);

  return (
    <Grid className="container">
      eya this is a shitty start page
      <UrlLists list={list}/>
      <SearchBar />
    </Grid>
  );
}

export default App;
