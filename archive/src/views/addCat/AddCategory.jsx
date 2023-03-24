import React, { useState } from "react";
// import PropTypes from "prop-types";

import {
  ButtonBase,
  Typography,
  makeStyles,
  InputBase,
  Grid,
} from "@material-ui/core";

const style = makeStyles((theme) => ({
  toggler: {
    color: theme.colors.black,
    fontStyle: "italic",
    "&:hover": {
      fontWeight: "bold",
    },
    "&:active": {
      color: theme.colors.offWhite,
    },
  },
  blackText: { color: theme.colors.black },
  whiteText: { color: theme.colors.offWhite },
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    "&:hover": { fontWeight: "bold" },
  },
}));

const AddCategory = (props) => {
  const { toggle, addCat } = props;
  const [catName, setCatName] = useState("");

  const onNameChange = (e) => setCatName(e.target.value);

  // submit add 
  const submit = () => {
    addCat(catName);
    toggle();
  };

  const classes = style();
  return (
    <>
      <ButtonBase onClick={toggle}>
        <Typography variant='h5' className={classes.toggler}>
          /add_category.sh
        </Typography>
      </ButtonBase>
      <Typography className={classes.blackText}>
        add new a new <span className={classes.whiteText}>link group</span> for
        your startpage
      </Typography>

      {/* form */}
      <form className={classes.form} onSubmit={submit}>
        <Grid container>
          <Grid item xs={6}>
            <InputBase value={catName} onChange={onNameChange} placeholder='[category name]' />
          </Grid>
          <Grid item xs={2}>
            <ButtonBase type='submit'>
              <Typography className={classes.button}>[ add ]</Typography>
            </ButtonBase>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

AddCategory.propTypes = {};

export default AddCategory;
