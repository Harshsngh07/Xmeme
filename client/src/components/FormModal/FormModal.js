import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import useStyles from "./style";
import Form from "../Form/Form";
import EditIcon from "@material-ui/icons/Edit";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function FormModal({ currentId, setCurrentId, meme }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const { _id } = meme;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Form
        currentId={currentId}
        setCurrentId={setCurrentId}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          handleOpen();
          setCurrentId(_id);
        }}
      >
        <EditIcon fontSize="default" />
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default FormModal;
