import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import ViewEntries from "./components/ViewEntries/ViewEntries";
import LogEntry from "./components/LogEntry/LogEntry";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/log">
          <LogEntry />
        </Route>
        <Route path="/view">
          <ViewEntries />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
