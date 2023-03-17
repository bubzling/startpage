import React, { useState } from "react";
import PropTypes from "prop-types";

// not used chuck somewhere else
const Link = (props) => {
  const { editMode, link, catID, linkID, deleteLink, updateLink, toggleEdit } =
    props;

  const [lText, setLText] = useState(link.text);
  const [lUrl, setLUrl] = useState(link.url);

  const update = () => {
    updateLink(catID, linkID, lText, lUrl);
    toggleEdit();
  };

  if (editMode)
    return (
      <>
        <input
          type='text'
          onChange={(e) => setLText(e.target.value)}
          value={lText}
          placeholder='text'
        />
        <input
          type='text'
          onChange={(e) => setLUrl(e.target.value)}
          value={lUrl}
          placeholder='url'
        />
        <button onClick={update}>edit</button>
        <button onClick={() => deleteLink(catID, linkID)}>delete</button>
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
