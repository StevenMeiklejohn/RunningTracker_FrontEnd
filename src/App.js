import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from './containers/MainContainer';

// import NavBar from "./components/NavBar";


import "./App.css";

const App = () => {

  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <MainContainer />
        </Switch>
      </div>
    </div>
  );
};

export default App;
