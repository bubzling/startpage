import { makeStyles } from "@material-ui/core";
import wal from "../assets/wall1.jpg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundImage: `url(${wal})`,
    height: "100vh",
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "5px solid #d4d6cf",
  },
  contentBackground: {
    backgroundColor: "rgba(119,152,96,0.6)",
    margin: "auto",
    border: "5px solid #b9c7a7",
  },
  content: {
    padding: "2em !important",
    color: "white",
  },
}));

export default useStyles;
// https://startpages.github.io/startpages/startpage-tudurom/
