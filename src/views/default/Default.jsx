import React from "react";
// import PropTypes from "prop-types";

import SearchBar from "../../components/Search/SearchBar";

// import styles from "./Default.style";
import Category from "../../components/cat/Category";

const Default = (props) => {
  const { list, modeOp } = props;
  const { toggleAddMode } = modeOp;

  // render link groups on the main page
  const renderLinks = () =>
    list.map((data, i) => (
      <Category key={i} id={i} data={data} modeOp={modeOp} />
    ));

  return (
    <>
      {/* body */}
      <div /*className={classes.box}*/>
        {/* add new category */}
        <button /*onClick={toggleAddMode}*/>
          <p /*className={classes.link}*/>/add_category.sh</p>
        </button>

        {/* all links stuff */}
        {renderLinks()}
      </div>

      {/* search bar */}
      <SearchBar /*className={classes.box}*/ />
    </>
  );
};

Default.propTypes = {};

export default Default;
