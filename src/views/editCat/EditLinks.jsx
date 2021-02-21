import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

import style from "./Edit.style";

import { Grid, InputBase, ButtonBase, Typography } from "@material-ui/core";

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

  const classes = style();
  return (
    <Grid container>
      <Grid item xs={4}>
        <InputBase
          value={text}
          onChange={onTextChange}
          onClick={() => setText(baseText)}
          placeholder={baseText}
        />
      </Grid>
      <Grid item xs={4}>
        <InputBase
          value={url}
          onChange={onUrlChange}
          onClick={() => setUrl(baseUrl)}
          placeholder={baseUrl}
        />
      </Grid>
      <Grid item xs={2}>
        <ButtonBase onClick={update}>
          <Typography className={classes.button}>[ edit ]</Typography>
        </ButtonBase>
      </Grid>

      <Grid item xs={2}>
        <ButtonBase onClick={() => deleteLink(catId, id)}>
          <Typography className={classes.button}>[ del ]</Typography>
        </ButtonBase>
      </Grid>
    </Grid>
  );
};

EditLinks.propTypes = {};

export default EditLinks;
