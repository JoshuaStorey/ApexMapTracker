import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Battle from "./components/Battle";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Arenas from "./components/Arenas";
import Navbar from "./components/Navbar";
import About from './components/About';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#151515',
  },
}));

const App = () => {



  const classes = useStyles();

  return (
    <Router>
     <div className={classes.root}>
      <CssBaseline />
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Battle />
        </Route>
        <Route exact path="/arenas">
        <Arenas />
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
      </Switch>
    </div> 
    </Router>
    
  );
};

export default App;
