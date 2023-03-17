import React, { useState } from "react";
// import PropTypes from "prop-types";

import EditLinks from "./EditLinks";
// import style from "./Edit.style";

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

  const addNew = () => (
    <div /*className={classes.box}*/>
      <p /*className={classes.blackText}*/>
        <span /*className={classes.whiteText}*/>add</span> a new link
      </p>
      <div>
        <div /*item xs={4}*/>
          <input
            type='text'
            value={linkText}
            onChange={onTextChange}
            placeholder='[ name ]'
          />
        </div>
        <div /*item xs={4}*/>
          <input
            type='text'
            value={linkUrl}
            onChange={onUrlChange}
            placeholder='[ url ]'
          />
        </div>
        <div /*item xs={2}*/>
          <button onClick={addNewLink}>
            <p /*className={classes.button}*/>[ add ]</p>
          </button>
        </div>
      </div>
    </div>
  );

  const edit = () => {
    if (list[id].links.length > 0)
      return (
        <div className={classes.box}>
          <p className={classes.blackText}>
            <span className={classes.whiteText}>edit</span> existing links
          </p>
          {list[id].links.map((data, i) => (
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
      <div /*className={classes.box}*/>
        <button onClick={toggle}>
          <p /*className={classes.toggler}*/>/edit.sh -c "{list[id].cat}""</p>
        </button>
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
