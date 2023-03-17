import React from "react";

// do add category here
// render eacj categpry
const Category = (props) => {
  const { data, id } = props;
  const { toggleEditMode } = props.modeOp;

  // render links for category
  const renderLinks = () =>
    data.links.map((e, i) => {
      return (
        <a key={i} /*className={classes.links}*/ href={`https://${e.url}`}>
          {e.text}
        </a>
      );
    });

  return (
    <p>
      <span /*className={classes.category}*/ onClick={() => toggleEditMode(id)}>
        /{data.cat}/
      </span>
      {renderLinks()}
    </p>
  );
};

// ________________________________________________________________________________

export default Category;
