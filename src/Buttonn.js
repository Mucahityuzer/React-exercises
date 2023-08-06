import React from "react";

const Buttonn=(props)=>{
    console.log(props);
   if(props.tip === "primary"){
    return(
        <div>
            <button
            style={{backgroundColor:"blue", color:"white"}}
            onClick={props.tiklaninca}>
                {props.btnText}
            </button>
        </div>
    );
   }
   if(props.tip === "secondary"){
    return(
        <div>
            <button style={{backgroundColor:"gray", color:"red"}}
            onClick={props.tiklaninca}>
                {props.btnText}
                </button>
        </div>
    );
   }
   return null;
};
    export default Buttonn