import React,{useEffect} from 'react';
import "./App.css"
import {Provider} from 'react-redux';
import store from './store';
import BaseComp from "./component/basecomp"
import Admin from "./component/admincomp/admin"
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
    <Provider store={store}>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/">
      <BaseComp />
      </Route>
      </Provider>
    </Switch>
    </Router>

  );
}

export default App;
