import React, { useState, useEffect, useReducer } from 'react';

/*
  Main container for startpage
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
  // hacky way to refresh rendering
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // dialog
  const [catDialog, setCatDialog] = useState(false);


  useEffect(() => {
    const DATA = JSON.parse(localStorage.getItem(LOCAL));
    setList(DATA || []);
  }, []);
  // ======================================================================
  // togglers
  const toggleAddCat = () => { setCatDialog(!catDialog); console.log("hey", catDialog) }

  // ======================================================================
  // save on every crud action
  const save = (newList) => {

    setList(newList);
    localStorage.setItem(LOCAL, JSON.stringify(newList));
  }


  // const load = () => setList(localStorage.getItem(LOCAL));

  // add new category
  const addCat = (category) => {
    // TODO validate duplicate
    if (category) {
        let newItem = { cat: category, links: [] }
        let newList = [...list, newItem];
        save(newList);
    } else alert("empty cat");
    forceUpdate();
  }

  const addLink = (catID, text, url) => {
    if ((catID !== -1) && text && url) {

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
    setList(prev => {
      let rm = list.slice();
      rm[catID].links[linkID] = { text, url };
      save(rm);
      return rm;
    })
  }

  // delete
  const deleteCat = (catID) => {
    setList(prev => {
      let rm = prev.slice();
      rm.splice(catID, 1);
      save(rm);
      return rm;
    })
  }

  // delete single link
  const deleteLink = (catID, linkID) => {
    console.log("old", list);

    setList(prev => {
      let rm = prev.slice();  // create a copy
      rm[catID].links.splice(linkID, 1);
      save(rm);
      return rm;
    })
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
          deleteCat={deleteCat}
          updateLink={updateLink}
          deleteLink={deleteLink} /> <hr />
        <SearchBar />   <hr />
      </Box>
    </Container>
  );
}

export default App;
