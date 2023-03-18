import React, { useState } from "react";
// import PropTypes from "prop-types";

import {
  Typography,
  ButtonBase,
  Grid,
  InputBase,
} from "@material-ui/core";
import EditLinks from "./EditLinks";
import style from "./Edit.style";

/* 
  edit mode
  contains
  delete category button

  add new link

  edit existing links
  delete exisitng links
*/

const Edit = (props) => {
  const { id, toggle, list, addLink, updateLink, deleteLink } = props;
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

  const addNew = () => (
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
          <ButtonBase onClick={addNewLink}>
            <Typography className={classes.button}>[ add ]</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );

  const edit = () => {
    if (list[id].urlList.length > 0)
      return (
        <div className={classes.box}>
          <Typography className={classes.blackText}>
            <span className={classes.whiteText}>edit</span> existing links
          </Typography>
          {list[id].urlList.map((data, i) => (
            <EditLinks
              key={i}
              catId={id}
              id={i}
              data={data}
              updateLink={updateLink}
              deleteLink={deleteLink}
            />
          ))}
        </div>
      );
  };

  return (
    <>
      <div className={classes.box}>
        <ButtonBase onClick={toggle}>
          <Typography variant='h5' className={classes.toggler}>
            /edit.sh -c "{list[id].categoryLabel}""
          </Typography>
        </ButtonBase>
      </div>

      {/* add new links */}
      {addNew()}

      {/* edit existing links */}
      {edit()}
    </>
  );
};

Edit.propTypes = {};

export default Edit;
