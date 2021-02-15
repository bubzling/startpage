import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  ButtonBase,
  Typography,
  makeStyles,
  FormControl,
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
  const { toggle } = props;
  const [catName, setCatName] = useState("");

  const classes = style();

  const submit = () => {
    alert("ee");
  };
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
            <InputBase placeholder='[category name]'></InputBase>
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
