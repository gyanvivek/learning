import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextEditor} from "./demo/texteditor";
import {Playground} from "./views/playground"

function App() {
  return (
    <div className="app">
        <Playground/>
    </div>
  );
}

export default App;
