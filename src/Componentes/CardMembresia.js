import React from "react";
import { Link } from "react-router-dom";


function CardMembresia(props)  {
    return(
        <div className="cardMembresia">
            <div className="cardTop">
               <img src={props.img} alt={props.alt} /> 
            </div>
            
            <div className="cardBottom">
                <h2>{props.title}</h2>
                <Link to={props.link}><button>Ver</button></Link>
            </div>
            
        </div>
    )
}

export default CardMembresia