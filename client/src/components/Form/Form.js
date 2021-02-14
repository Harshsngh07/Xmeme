import React, { useState, useEffect } from "react";
import { Typography, Paper, Button, TextField } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createMeme, updateMeme } from "../../actions/memes";
function Form({ currentId, setCurrentId, open, setOpen }) {
  const classes = useStyles();
  const [memeData, setMemeData] = useState({
    name: "",
    caption: "",
    imageUrl: "",
  });

  const meme = useSelector((state) =>
    currentId ? state.memes.find((m) => m._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (meme) setMemeData(meme);
  }, [meme]);

  function handleClose() {
    setOpen(!open);
    setInterval(() => {
      window.location.reload();
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentId) {
      dispatch(updateMeme(currentId, memeData));
    } else {
      dispatch(createMeme(memeData));
    }
    clear();
    if (open) {
      handleClose();
    }
  }

  const clear = () => {
    setCurrentId(0);
    setMemeData({
      name: "",
      caption: "",
      imageUrl: "",
    });
  };
  return (
    <Paper className={classes.Paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit Meme" : "Post a Meme"}
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={memeData.name}
          onChange={(e) => setMemeData({ ...memeData, name: e.target.value })}
        />
        <TextField
          name="caption"
          variant="outlined"
          label="Caption"
          fullWidth
          value={memeData.caption}
          onChange={(e) =>
            setMemeData({ ...memeData, caption: e.target.value })
          }
        />
        <TextField
          name="url"
          variant="outlined"
          label="Image Url"
          fullWidth
          value={memeData.imageUrl}
          onChange={(e) =>
            setMemeData({ ...memeData, imageUrl: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
export default Form;
