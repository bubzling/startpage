import { makeStyles } from "@material-ui/core";
import wal from "../assets/wall1.jpg";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundImage: `url(${wal})`,
    height: "100vh",
    backgroundPosition: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default useStyles;
// https://startpages.github.io/startpages/startpage-tudurom/
