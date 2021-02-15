import React, { useState, useReducer } from "react";

/*
  Main container for startpage
*/

import App from "./App";
// import sample from "./sample"
/* [ data format
  {
    groupName: category,
    links: [ { text, url } ]
  }
]*/
const LOCAL = "_allLinks";

const AppContainer = (props) => {
  const DATA = JSON.parse(localStorage.getItem(LOCAL));
  // const DATA = sample;
  // hacky way to refresh rendering
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [list, setList] = useState(DATA || []);
  const [addMode, setAddMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [catEdit, setCatEdit] = useState(0);

  const toggleAddMode = () => {
    setEditMode(false);
    setAddMode(!addMode);
  }

  const toggleEditMode = (categoryID) => {
    setAddMode(false);
    setCatEdit(categoryID);
    setEditMode(!editMode);
  }

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

  // add new link
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

  // update a link
  const updateLink = (catID, linkID, text, url) => {
    let rm = list.slice();
    rm[catID].links[linkID] = { text, url };
    save(rm);
  };

  // delete category
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
  const modeOp = { toggleEditMode, toggleAddMode, catEdit, addMode, editMode };
  const categoryOp = { addCat, deleteCat };
  const linkOp = { addLink, updateLink, deleteLink }

  return (
    <App list={list} categoryOp={categoryOp} linkOp={linkOp} modeOp={modeOp}/>
  );
};

export default AppContainer;
