import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: { marginBottom: theme.spacing(3) },
  link: {
    color: theme.colors.black,
    "&:hover": {
      fontWeight: "bold",
    },
    "&:active": {
      color: theme.colors.offWhite,
    },
  },
}));

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Typography variant='h3'>Another Start page</Typography>
      <Typography variant='h6'>
        by a{" "}
        <a
          rel="noopener noreferrer"
          className={classes.link}
          target='_blank'
          href='https://github.com/deBubz/startpage'
        >
          little ol me
        </a>
      </Typography>
    </div>
  );
};

export default Title;
