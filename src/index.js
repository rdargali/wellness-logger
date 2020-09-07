import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import ViewEntries from "./components/ViewEntries/ViewEntries";
import LogEntry from "./components/LogEntry/LogEntry";

ReactDOM.render(
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/log" component={LogEntry} />
        <Route path="/view" component={ViewEntries} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);
