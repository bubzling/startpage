import React, { useState } from 'react';

/*
  Main container for launchpad
*/

import UrlLists from '../components/Links/Listing';
import SearchBar from '../components/Search/SearchBar';
import CatCreate from '../components/CatCreate/CatCreate'
import LinkCreate from '../components/LinkCreate/LinkCreate'

import sampleData from './sample'
import { Box, Container } from '@material-ui/core'
import { teal } from '@material-ui/core/colors';

/* [ data format
  {
    groupName: category,
    links: [ { text, url } ]
  }
]*/
const LOCAL = '_allLinks'

const App = props => {
  const [list, setList] = useState(sampleData);
  // const [list, setList] = useState(JSON.parse(localStorage.getItem(LOCAL)));
  // const [editMode, setEditMode] = useState(false);

  // ======================================================================
  // save on every crud action
  const save = (newList) => {
    localStorage.setItem(LOCAL, JSON.stringify(newList));
  }

  // const load = () => setList(localStorage.getItem(LOCAL));

  // cat create
  const addCat = (category) => {
    // TODO validate duplicate, empty string
    if (category) {
      setList(prev => {
        let newList = [...prev, { groupName: category, links: [] },]
        save(newList);

        return newList;
      });
    } else alert("empty cat");
  }

  // const addLink = (category, text, url) => {  
  //   if((category !== -1) && text && url) {
  //     setList(prev => {
  //       let newList = prev;
  //       let newLinks = prev[category].links;
  //       newLinks = [ ...newLinks, { text, url }]
  //       newList[category].links = newLinks;
  //       save(newList);

  //       return newList;
  //     })
  //   } else alert("missing selection");
  // }

  // update 

  // delete

  // ======================================================================


  return (
    <Container maxWidth="lg" className="container">
      <Box component="div"
        width="50%"
        padding="2.5% 5%"
        margin="auto"
        border="1px solid {teal[100]}"
        style={{backgroundColor: teal[100]}}
        >

      eya this is a shitty start page
      <hr />

        {/* CRUD placeholder */}
        <CatCreate addCat={addCat} /> <hr />
        {/* <LinkCreate list={list} addLink={addLink} /> <hr/> */}


        {/* ================ */}
        <UrlLists list={list} /> <hr />
        <SearchBar />   <hr />
      </Box>
    </Container>
  );
}

export default App;
