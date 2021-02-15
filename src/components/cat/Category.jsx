import { Typography } from "@material-ui/core";
import React from "react";

import style from "./Categories.style";

// do add category here
// render eacj categpry
const Category = (props) => {
  const { data, id, } = props;
  const { toggleEditMode } = props.modeOp;

  const classes = style();

  // render links for category
  const renderLinks = () =>
    data.links.map((e, i) => {
      return (
        <a key={i} className={classes.links} href={`https://${e.url}`}>
          {e.text}
        </a>
      );
    });

  return (
    <Typography>
      <span
        className={classes.category}
        onClick={() => toggleEditMode(id)}
      >
        /{data.cat}/
      </span>
      {renderLinks()}
    </Typography>
  );
};

// ________________________________________________________________________________

export default Category;
