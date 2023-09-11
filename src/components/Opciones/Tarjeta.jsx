import React from 'react';
import '../Opciones/Hojas de estilo Opciones/Tarjeta.css'

const Tarjeta = ({img, titulo, descripcion, precio, comprar}) => {
    return(
      <div className="tarjeta">
        <img src={img} alt=""/>
          <div className="tarjeta-textos">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
              <div className="opciones-comprar">
                  <p>{precio}</p>
                  <button>{comprar}</button>
              </div>
          </div>
      </div>
    )
}

export { Tarjeta }