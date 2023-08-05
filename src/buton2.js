import React from "react";

const Buton2=(props)=>{
    return(
        <div>
            <button
            onClick={props.tiklad}>
                
            {props.btnText}
            </button>
        </div>
    );

} 

export default Buton2