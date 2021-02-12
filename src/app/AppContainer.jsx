import React, { useState, useReducer } from "react";

/*
  Main container for startpage
*/

import App from "./App";

import Listing from "../components/Links/Listing";
import SearchBar from "../components/Search/SearchBar";
import CatCreate from "../components/CatCreate/CatCreate";

import { Box, Button, Container } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

/* [ data format
  {
    groupName: category,
    links: [ { text, url } ]
  }
]*/
const LOCAL = "_allLinks";

const AppContainer = (props) => {
  const DATA = JSON.parse(localStorage.getItem(LOCAL));
  // hacky way to refresh rendering
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [list, setList] = useState(DATA || []);
  const [catDialog, setCatDialog] = useState(false);

  // ======================================================================
  // toggle add category menu
  const toggleAddCat = () => {
    setCatDialog(!catDialog);
    console.log("hey", catDialog);
  };

  // ======================================================================
  // save on every crud action
  const save = (newList) => {
    setList(newList);

    localStorage.setItem(LOCAL, JSON.stringify(newList));
  };

  // add new category
  const addCat = (category) => {
    if (category) {
      let newItem = { cat: category, links: [] };
      let newList = [...list, newItem];
      save(newList);
    } else alert("empty cat");
    forceUpdate();
  };

  const addLink = (catID, text, url) => {
    if (catID !== -1 && text && url) {
      let newList = list.slice();
      // set new list
      newList[catID] = {
        ...newList[catID],
        links: [...newList[catID].links, { text, url }],
      };
      save(newList);
    } else alert("missing selection");
    forceUpdate();
  };

  // update
  const updateLink = (catID, linkID, text, url) => {
    let rm = list.slice();
    rm[catID].links[linkID] = { text, url };
    save(rm);
  };

  // delete
  const deleteCat = (catID) => {
    let rm = list.slice();
    rm.splice(catID, 1);
    save(rm);
  };

  // delete single link
  const deleteLink = (catID, linkID) => {
    let rm = list.slice(); // create a copy
    rm[catID].links.splice(linkID, 1);
    save(rm);
  };

  // ======================================================================
  const categoryOp = { addCat, deleteCat };
  const linkOp = { addLink, updateLink, deleteLink }

  return (
    <App list={list} categoryOp={categoryOp} linkOp={linkOp} />
  );
};

export default AppContainer;