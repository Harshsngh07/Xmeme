import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "70%",
    maxWidth: "100vw",
    position: "fixed",
    top: "50%",
    left: "0",
    right: "40%",
    transform: "translate(0, -50%)",
    overflowY: "auto",
  },
}));

export default useStyles;
