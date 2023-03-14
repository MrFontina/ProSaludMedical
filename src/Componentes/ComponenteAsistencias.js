import React from 'react'

function ComponenteAsistencias(props) {
  return (
    <div className='div-asistencias'>
            <div className='banner-asistencias' style={props.img}>
                <div className='banner-title'>
                    <h2>{props.subtitle}</h2>
                    <h1>{props.title}</h1>
                </div>
            </div>
            <article>
                {props.article}
            </article>
        </div>
  )
}

export default ComponenteAsistencias