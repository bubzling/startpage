import { makeStyles } from "@material-ui/core";
import wal from "../assets/wall1.jpg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundImage: `url(${wal})`,
    height: "100vh",
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: `5px solid ${theme.colors.mainBorder}`,
  },
  contentBackground: {
    backgroundColor: "rgba(119,152,96,0.7)",
    margin: "auto !important",
  },
  content: {
    padding: "2em 3em !important",
    color: theme.colors.offWhite,
  },
  box: {
    marginBottom: theme.spacing(3),
  },
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

export default useStyles;
// https://startpages.github.io/startpages/startpage-tudurom/
