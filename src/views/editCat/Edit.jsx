import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  Typography,
  ButtonBase,
  Grid,
  InputBase,
} from "@material-ui/core";
import { ClassSharp } from "@material-ui/icons";

const style = makeStyles((theme) => ({
  toggler: {
    color: theme.colors.black,
    fontStyle: "italic",
    "&:hover": { fontWeight: "bold" },
    "&:active": { color: theme.colors.offWhite },
  },
  blackText: { color: theme.colors.black },
  whiteText: { color: theme.colors.offWhite },
  box: { marginBottom: theme.spacing(1) },
  button: { "&:hover": { fontWeight:"bold"}}
}));

/* 
  edit mode
  contains
  delete category button

  add new link

  edit existing links
  delete exisitng links
*/

const Edit = (props) => {
  const { id, toggle, list, addLink } = props;
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const onTextChange = (e) => setLinkText(e.target.value);
  const onUrlChange = (e) => setLinkUrl(e.target.value);
  const addNewLink = () => {
    addLink(id, linkText, linkUrl);
    setLinkText("");
    setLinkUrl("");
  };

  const classes = style();
  return (
    <>
      <div className={classes.box}>
        <ButtonBase onClick={toggle}>
          <Typography variant='h5' className={classes.toggler}>
            /edit.sh -c "{list[id].cat}""
          </Typography>
        </ButtonBase>
      </div>

      {/* add new links */}
      <div className={classes.box}>
        <Typography className={classes.blackText}>
          <span className={classes.whiteText}>add</span> a new link
        </Typography>
        <Grid container>
          <Grid item xs={4}>
            <InputBase
              value={linkText}
              onChange={onTextChange}
              placeholder='[ name ]'
            />
          </Grid>
          <Grid item xs={4}>
            <InputBase
              value={linkUrl}
              onChange={onUrlChange}
              placeholder='[ url ]'
            />
          </Grid>
          <Grid item xs={2}>
            <ButtonBase onClick={() => addLink(id, linkText, linkUrl)}>
              <Typography className={classes.button}>[ add ]</Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </div>

      {/* edit existing links */}
      <Typography className={classes.blackText}>
        <span className={classes.whiteText}>edit</span> existing links
      </Typography>
    </>
  );
};

Edit.propTypes = {};

export default Edit;
