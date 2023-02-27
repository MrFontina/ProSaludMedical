import React from "react";


function CardMembresia(props)  {
    return(
        <div className="cardMembresia">
            <div className="cardTop">
               <img src={props.img} alt={props.alt} /> 
            </div>
            
            <div className="cardBottom">
                <h2>{props.title}</h2>
                <button>Ver</button>
            </div>
            
        </div>
    )
}

export default CardMembresia