import React, { useState, useReducer } from "react";

import App from "./App";
import { AppModel, LinkCategoryModel } from "../models/links.model";
import { AppContextProvider, useAppContext } from "../app.context";

/*
  Main container for startpage
*/


const LOCAL = "_allLinks";

const AppContainer = (props) => {
  const { one } = useAppContext();

  console.log("using context", one)

  // on app start
  // read local storage for data
  // if not assign new AppState 
  const DATA = JSON.parse(localStorage.getItem(LOCAL));
  // const DATA = new AppModel(JSON.parse(localStorage.getItem(LOCAL)));

  const [list, setList] = useState(DATA || []);
  const [addMode, setAddMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [catEdit, setCatEdit] = useState(0);
  const [categoryObj, setCategoryObj] = useState({});
  // hacky way to refresh rendering
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const toggleAddMode = () => {
    setEditMode(false);
    setAddMode(!addMode);
  }

  const toggleEditMode = (categoryID, categoryObj) => {
    setAddMode(false);
    setCategoryObj(categoryObj)
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
      // let newItem = { categoryLabel: category, links: [] };
      let newItem = new LinkCategoryModel(category)
      let newList = [...list, newItem];
      save(newList);
    } else alert("empty cat");
    forceUpdate();
  };

  // add new link
  // TODO: pass the category in here instead of ID
  const addLink = (category, label, url) => {
    if (!!category && label && url) {
      
      category.addLink(label, url);

      save(this.list);
    } else alert("Error adding new link");
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
  const modeOp = { toggleEditMode, toggleAddMode, categoryObj, catEdit, addMode, editMode };
  const categoryOp = { addCat, deleteCat };
  const linkOp = { addLink, updateLink, deleteLink }

  return (
    <AppContextProvider>
      <App list={list} categoryOp={categoryOp} linkOp={linkOp} modeOp={modeOp}/>
    </AppContextProvider>
  );
};

export default AppContainer;
