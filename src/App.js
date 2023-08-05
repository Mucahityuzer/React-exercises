import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yazi from './Yazi';
import Button from './button';
import Buton2 from './buton2';

function App() {
  return (
    <div className="App">

     <Yazi 
     TextToBeWrittenOnTheScreen = "my first prop" farbe="red" background="black" />
     <Yazi 
     TextToBeWrittenOnTheScreen = "my second prop" farbe="blue" />
     <Yazi 
     TextToBeWrittenOnTheScreen = "my third prop" farbe="blau" />
     <Button
      btnText="Buttton2"
      tiklaninca={() =>{
        alert("buton 2 ye tiklandi");
      }} 
       />

      <Button
      btnText="Farkli buton"
      tiklaninca={()=>{
        console.log("farkli butona tiklandi");
      }}
      />

      <Buton2 
      tiklad={()=>{
        alert("kendi butonuma tikladim");
      }}
      btnText="kendi butonum"/>
     
    </div>
  );
}

export default App;
