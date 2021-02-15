import React from "react";
import PropTypes from "prop-types";

import useStyles from "./App.style";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Default from "../views/default/Default";
import Title from "../components/title/Title";

const App = (props) => {
  const { list, categoryOp, linkOp, modeOp } = props;
  const { editMode, addMode } = modeOp;

  const renderModes = () => {
    if (editMode) return <p>edit mode</p>;
    else if (addMode) return <p>add mode</p>;
    else return <Default list={list} categoryOp={categoryOp} linkOp={linkOp} />;
  };

  const classes = useStyles();
  return (
    // bg has image
    // main container has a darker
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.contentBackground}>
        <Box className={classes.content}>
          <Title />

          {renderModes()}
        </Box>
        {/* containerize */}
        {/* containerize */}
      </Grid>
    </Grid>
  );
};

App.propTypes = {
  list: PropTypes.array.isRequired,
  categoryOp: PropTypes.exact({
    addCat: PropTypes.func.isRequired,
    deleteCat: PropTypes.func.isRequired,
  }).isRequired,
  linkOp: PropTypes.exact({
    addLink: PropTypes.func.isRequired,
    updateLink: PropTypes.func.isRequired,
    deleteLink: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
