import React from 'react'
import { useState } from 'react'

function CardHover(props) {

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }
    const handleMouseLeave = () => {
        setHovered(false)
    }


    return (
        <div className="cardHover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {hovered ? (
                <>
                <div className='card-hovered'>
                 <p >
                    {props.parrafo}
                </p>   
                </div>
                
                </>
                
            ) : (
                <>

                    <div className="cardHoverTop">
                        <img src={props.img} alt={props.alt} />
                    </div>

                    <div className="cardHoverBottom">
                        <h2>{props.title}</h2>
                    </div>
                </>


            )



            }


        </div>

    )
}

export default CardHover