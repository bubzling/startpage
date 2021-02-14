import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  category: {
    color: theme.colors.black,
    cursor: "pointer",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  links: {
    color: theme.colors.offWhite,
  },
}));

export default style;
