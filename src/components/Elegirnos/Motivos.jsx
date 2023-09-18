import React from 'react';
import './Hoja de estilo-Elegirnos/motivos.css'

const Motivos = ({img, titulo, texto}) => {
  return(
    <div className="motivos">
      <div className="motivo">
        <img src={img} alt=""/>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </div>
  )
}

export { Motivos }