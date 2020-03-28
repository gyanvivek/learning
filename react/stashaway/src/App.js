import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./views/home";

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'linear-gradient(315deg, #e1e1e1, #f4f4f4)'}}>
     <Home />
    </div>
  );
}

export default App;
