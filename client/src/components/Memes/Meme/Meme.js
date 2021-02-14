import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { deleteMeme, likeMeme } from "../../../actions/memes";
import moment from "moment";
import FormModal from "../../FormModal/FormModal";
const Meme = ({ meme, setCurrentId, currentId }) => {
  const { _id, createdAt, imageUrl, name, caption, likeCount } = meme;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageUrl} />
      {/* <div className={classes.overlay}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div> */}
      {/* <div className={classes.overlay2}>
        <Button style={{ color: "black" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div> */}
      {/* <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div> */}
      <div className={classes.Time}>
        <Typography
          className={classes.title}
          component="h2"
          variant="h5"
          gutterBottom
        >
          {name}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          {moment(createdAt).fromNow()}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {caption}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likeMeme(_id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {likeCount}
        </Button>
        {/* <Button
          style={{ color: "#333" }}
          size="small"
          onClick={() => {
            setCurrentId(_id);
          }}
        ></Button> */}
        <FormModal
          currentId={currentId}
          setCurrentId={setCurrentId}
          meme={meme}
        />
        <Button
          style={{ color: "#d90000" }}
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deleteMeme(_id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Meme;
