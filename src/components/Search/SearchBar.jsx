import React, { useState } from "react";
// import InputBase from "@material-ui/core/InputBase";
// import useStyles from './Search.style';

/* 
  Search bar component
*/
const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => setSearch(e.target.value);

  const onEnter = (e) => {
    // console.log(e);
    if (e.keyCode === 13 && search !== "") {
      let searchTerm = search.split(" ").join("+");
      window.open(`https://google.com/search?q=${searchTerm}`);
      window.close();
      // window.close();
    }
  };

  return (
    <div>
      <input
        type='text'
        /*className={classes.bar}*/
        placeholder='/search'
        value={search}
        onChange={onSearchChange}
        onKeyDown={onEnter}
      />
    </div>
  );
};

export default SearchBar;
