import React,{useEffect} from 'react';
import "./App.css"
import {Provider} from 'react-redux';
import store from './store';
import BaseComp from "./component/basecomp"
function App() {

  return (
    <Provider store={store}>
      <BaseComp />
    </Provider>
  );
}

export default App;
