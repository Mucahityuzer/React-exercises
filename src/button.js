import React from "react";

const Button=(props)=>{
    console.log(props);
    return(
        <div>
            <button
             onClick={props.tiklaninca}>
               {props.btnText}

            </button>
        </div>
    );
};
    export default Button