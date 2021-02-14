import React, { useState } from "react";
import PropTypes from "prop-types";

import { TextField, Button } from '@material-ui/core'

// not used chuck somewhere else
const Link = (props) => {
  const {
    editMode,
    link,
    catID,
    linkID,
    deleteLink,
    updateLink,
    toggleEdit,
  } = props;

  const [lText, setLText] = useState(link.text);
  const [lUrl, setLUrl] = useState(link.url);

  const update = () => {
    updateLink(catID, linkID, lText, lUrl);
    toggleEdit();
  };

  if (editMode)
    return (
      <>
        <TextField
          onChange={(e) => setLText(e.target.value)}
          value={lText}
          placeholder='text'
        />
        <TextField
          onChange={(e) => setLUrl(e.target.value)}
          value={lUrl}
          placeholder='url'
        />
        <Button onClick={update}>edit</Button>
        <Button onClick={() => deleteLink(catID, linkID)}>delete</Button>
      </>
    );
  else
    return (
      <li>
        <a href={`https://${lUrl}`}>{lText}</a>
      </li>
    );
};

Link.propTypes = {};

export default Link;
