import React from "react";

/*
     "Eine Komponente gibt im Grunde JSX zurück."
     "JSX is a syntax style resembling HTML."
     React converts the code written with JSX into JavaScript in the background and adds it to the DOM.
     - props componenete gonderilen parametre toplulugudur.
     - "Um in JSX JavaScript-Code verwenden zu können, werden geschweifte Klammern {} geöffnet und geschlossen." 

*/
const Yazi=(props)=>{
    console.log(props)

    return(

    <div>
        <p style={{color:props.farbe,backgroundColor:props.background}}>{props.TextToBeWrittenOnTheScreen}</p>
    </div>
    );

}

export default Yazi