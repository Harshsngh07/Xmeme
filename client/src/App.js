import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Memes from "./components/Memes/Memes";
import { Container, Typography, Grow, Grid, AppBar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { getMemes } from "./actions/memes.js";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Xmeme
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Memes setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
