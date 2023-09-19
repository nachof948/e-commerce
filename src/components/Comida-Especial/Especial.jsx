import React from 'react';
import './Hoja de estilos Comida-Especial/especial.css'
import Estrella from './Imagenes/icons8-estrella.png'
import BolsaDeCompra from './Imagenes/icons8-bolsa-de-compras-45.png'

const Especial = ({img, titulo, precio}) => {
  return(
    <div className="especial">
      <img className="comida" src={img} alt=""/>
      <h2>{titulo}</h2>
      <div className="estrellas">
          <img src={Estrella} alt=""/>
          <img src={Estrella} alt=""/>
          <img src={Estrella} alt=""/>
          <img src={Estrella} alt=""/>
          <img src={Estrella} alt=""/>
          <p className="num">(169)</p>
      </div>
      <div className="precio">
      <p>{precio}</p>
      </div>
      <div className="bolsa">
          <img className="bolsasa" src={BolsaDeCompra} alt=""/>
      </div>
    </div>
  )
}

export { Especial }