import React, { useState, useEffect, useReducer } from 'react';

/*
  Main container for launchpad
*/

import Listing from '../components/Links/Listing';
import SearchBar from '../components/Search/SearchBar';
import CatCreate from '../components/CatCreate/CatCreate'

import sampleData from './sample'
import { Box, Button, Container } from '@material-ui/core'
import { teal } from '@material-ui/core/colors';

/* [ data format
  {
    groupName: category,
    links: [ { text, url } ]
  }
]*/
const LOCAL = '_allLinks'

const App = props => {
  const [list, setList] = useState([]);
  const [, forceUpdate] = useReducer(x => x+1, 0);

  // dialog
  const [catDialog, setCatDialog] = useState(false);


  useEffect(() => {
    const DATA = JSON.parse(localStorage.getItem(LOCAL));
    const SAMPLE = sampleData;
    setList(SAMPLE);
    console.log("io")
  }, []);
  // ======================================================================
  // togglers
  const toggleAddCat = () => {setCatDialog(!catDialog); console.log("hey", catDialog)}

  // ======================================================================
  // save on every crud action
  const save = (newList) => 
    localStorage.setItem(LOCAL, JSON.stringify(newList));
  

  // const load = () => setList(localStorage.getItem(LOCAL));

  // add new category
  const addCat = (category) => {
    // TODO validate duplicate
    if (category) {
      setList(prev => {
        let newItem = { cat: category, links: []}
        let newList = [...prev, newItem];
        save(newList);
        return newList;
      })
    } else alert("empty cat");

    forceUpdate();
  }

  const addLink = (catID, text, url) => {
    console.log(catID, text, url);
    if((catID !== -1) && text && url) {

      setList(prev => {
        let newLinks = { text, url };

        let newList = prev;
        newList[catID] = {
          ...newList[catID],
          links: [...newList[catID].links, newLinks],
        }

        console.log(newList);
        save(newList);
        return newList;
      });
    } else alert("missing selection");
    forceUpdate();
  }

  // update
  const updateLink = (catID, linkID, text, url) => {
    console.log(catID, linkID, text, url);
  }

  // delete
  const deleteCat = (catID) => {
    let rm = list.slice();
    rm.splice(catID, 1);

    console.log("old", list);
    console.log("new", rm);
    setList(prev => {
      let rm = prev.slice();
      rm.splice(catID, 1);
      save(rm);
      return rm;
    })

    // save to thing
  }

  // ======================================================================


  return (
    <Container maxWidth="lg" className="container">
      <Box component="div"
        width="50%"
        padding="2.5% 5%"
        margin="auto"
        border="1px solid {teal[100]}"
        style={{ backgroundColor: teal[100] }}
      >

        eya this is a shitty start page
      <hr />

        {/* CRUD placeholder */}
        <Button variant="contained" onClick={toggleAddCat}> Add Category </Button>
        <CatCreate open={catDialog} addCat={addCat} /> <hr />


        {/* ================ */}
        <Listing list={list} 
          addLink={addLink}
          deleteCat={deleteCat} /> <hr />
        <SearchBar />   <hr />
      </Box>
    </Container>
  );
}

export default App;
