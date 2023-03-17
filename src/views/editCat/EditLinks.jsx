import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// import style from "./Edit.style";

const EditLinks = (props) => {
  const { data, updateLink, deleteLink, catId, id } = props;

  const [text, setText] = useState(data.text);
  const [url, setUrl] = useState(data.url);
  const baseUrl = data.url,
    baseText = data.text;

  const onTextChange = (e) => setText(e.target.value);
  const onUrlChange = (e) => setUrl(e.target.value);

  const update = () => {
    updateLink(catId, id, text, url);
    setText("");
    setUrl("");
  };

  useEffect(() => {
    setText("");
    setUrl("");
  }, []);

  return (
    <grid>
      <div>
        <input
          type='text'
          value={text}
          onChange={onTextChange}
          onClick={() => setText(baseText)}
          placeholder={baseText}
        />
      </div>
      <div>
        <input
          type='text'
          value={url}
          onChange={onUrlChange}
          onClick={() => setUrl(baseUrl)}
          placeholder={baseUrl}
        />
      </div>
      <div>
        <button onClick={update}>
          <p className={classes.button}>[ edit ]</p>
        </button>
      </div>

      <div>
        <button onClick={() => deleteLink(catId, id)}>
          <p className={classes.button}>[ del ]</p>
        </button>
      </div>
    </grid>
  );
};

EditLinks.propTypes = {};

export default EditLinks;
