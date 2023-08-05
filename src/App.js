import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yazi from './Yazi';

function App() {
  return (
    <div className="App">

     <Yazi TextToBeWrittenOnTheScreen = "my first prop" farbe="red" background="black" />
     <Yazi TextToBeWrittenOnTheScreen = "my second prop" farbe="blue" />
     <Yazi TextToBeWrittenOnTheScreen = "my third prop" farbe="blau" />
     
    </div>
  );
}

export default App;
