import React, { useState } from 'react';

import UrlLists from '../components/Links/UrlLists';
import SearchBar from '../components/Search/SearchBar';
import CatCreate from '../components/CatCreate/CatCreate'

// import sampleData from './sample'

import Grid from '@material-ui/core/Grid'
/*
  Main container for launchpad
*/
// console.log("Samle", sampleData)
/* 
  data format
[
  {
    groupName: category,
    links: [ { text, url } ]
  }
]
*/
const LOCAL = '_allLinks'

const App = props => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem(LOCAL)));
  // const [editMode, setEditMode] = useState(false);

  // ======================================================================
  // save on every crud action
  const save = (newList) => {
    localStorage.setItem(LOCAL, JSON.stringify(newList));
  }
  
  // cat create
  const addCat = (category) => {
    // TODO validate duplicate, empty string
    if (category) {
      setList(prev => {
        let newList = [ ...prev, { groupName: category, links: [] }, ]
        save(newList);

        return newList;
      });
    } else {
      alert("empty cat");
    }
  }

  const addLink = (category, link) => {
    if(category && link) {
      setList(prev => {
        
      })
    }
  }

  // update 

  // delete

  // ======================================================================


  return (
    <Grid className="container">
      eya this is a shitty start page

      {/* CRUD placeholder */}
      <CatCreate addCat={addCat} />

      {/* ================ */}
      <UrlLists list={list} />
      <SearchBar />
    </Grid>
  );
}

export default App;
