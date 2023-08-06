import React from "react";
import Buttonn from "./Buttonn";
const Studentt=(props)=>{
    return(
        <div>
            <h1>{props.item.name} {props.item.surname}</h1>
            <p>{props.item.class}</p>
            <Buttonn
            btnText="detaylar"
            tip="primary"
            tiklaninca={()=>{
                alert(props.item.name);
            }}
            />
            <hr/>
        </div>
    )

}







export default Studentt