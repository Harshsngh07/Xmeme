import React from "react";
import Meme from "./Meme/Meme";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./style";

const Memes = ({ setCurrentId, currentId }) => {
  const memes = useSelector((state) => state.memes);
  const classes = useStyles();
  return !memes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {memes.map((meme) => (
        <Grid key={meme._id} item xs={12} sm={6} md={6}>
          <Meme meme={meme} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Memes;
