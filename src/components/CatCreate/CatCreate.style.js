import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  button: {
    color: theme.colors.black,
    "&:hover": {
      fontWeight: "bold",
    },
    "&:active": {
      color: theme.colors.offWhite,
    },
  },
}));

export default style;
