import React from 'react';
import Yazi from './Yazi';
import Buttonn from './Buttonn';
import Buton2 from './buton2';
import Studentt from './Studentt';

const students=[
  {
    name:"alex",
    surname:"tyco",
    class:"3/B",
  },
  {
    name:"cahit",
    surname:"yzr",
    class:"6/C",
  },
  {
    name:"fatih",
    surname:"kara",
    class:"9/K",
  },
]

function App() {
  return (
    <div className="App">
      {
        students.map((item,index)=>{
          return(
            <Studentt key={index} item={item}/>
          )
        })
        
      }
      
    </div>

     
  );
}
export default App;
//{/* export default App; */}




//{/* <Yazi 
    //  TextToBeWrittenOnTheScreen = "my first prop" farbe="red" background="black" />
    //  <Yazi 
    //  TextToBeWrittenOnTheScreen = "my second prop" farbe="blue" />
    //  <Yazi 
    //  TextToBeWrittenOnTheScreen = "my third prop" farbe="blau" />
    //  <Button
    //   btnText="Buttton2"
    //   tiklaninca={() =>{
    //     alert("buton 2 ye tiklandi");
    //   }} 
    //   tip="primary"
    //    />

    //   <Button
    //   btnText="Farkli buton"
    //   tiklaninca={()=>{
    //     console.log("farkli butona tiklandi");
    //   }}
    //   tip="secondary"
    //   />

    //   <Buton2 
    //   btnText="kendi butonum"
    //   tiklad={()=>{
    //     alert("kendi butonuma tikladim");
    //   }}
    //   />
     
    //  */}



    // students.map((item,index)=>{
    //   return(
    //     <div key={index}>
    //       <h1>{item.name} {item.surname}</h1>
    //       <p>{item.class}</p>
    //       <hr/>
    //     </div>
    //   )