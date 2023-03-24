import { createMuiTheme } from "@material-ui/core/styles";

// global material ui theme

const Theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: "Source code pro",
  },
  spacing: 16,
  colors: {
    offWhite: "#fafffc",
    mainBorder: "#b9c7a7",
    black: "#1d1e1d",
  },
});

export default Theme;
