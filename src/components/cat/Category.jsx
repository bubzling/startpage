import { TextField, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

import style from "./Categories.style";
import Link from "./LinkEditMOde";

// do add category here
// render eacj categpry
const Category = (props) => {
  const { data, id, deleteCat, linkOp } = props;

  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const [editMode, setEditMode] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onChangeUrl = (e) => setUrl(e.target.value);
  const toggleEdit = () => setEditMode(!editMode);

  const classes = style();

  // show edit mode
  // add link, delete category
  // edit links
  const renderEditMode = () => {
    // currently add new link
    if (editMode)
      return (
        <>
          <TextField onChange={onChangeText} value={text} placeholder='text' />
          <TextField onChange={onChangeUrl} value={url} placeholder='url' />
          <Button
            onClick={() => {
              linkOp.addLink(id, text, url);
              setText("");
              setUrl("");
              toggleEdit(!editMode);
            }}
          >
            Add New Link
          </Button>
        </>
      );
  };

  // display delete category
  // move delete into edit mode

  const renderLinks = () =>
    data.links.map((e, i) => {
      return (
        <a
          key={i}
          className={classes.links}
          href={`https://${e.url}`}
        >
          {e.text}
        </a>
      );
    });

  return (
    <Typography>
      <span className={classes.category} onClick={()=>alert("hey")}>
        /{data.cat}/
        </span>
      {renderLinks()}
    </Typography>
  );
};

// ________________________________________________________________________________

export default Category;
