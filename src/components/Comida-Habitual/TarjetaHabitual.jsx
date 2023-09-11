import React from 'react';
import Estrella from './Imagenes/icons8-estrella.png'
import '../Comida-Habitual/Hojas de estilo Comida-Habitual/TarjetaHabitual.css'

const TarjetaHabitual = ({img, titulo, descripcion, precio, comprar, estrellas}) => {
    return(
      <div className="tarjeta-habitual">
        <img className='tarjeta-habitual-img' src={img} alt=""/>
          <div className="tarjeta-textos-habitual">
            <h2>{titulo}</h2>
            <div className="estrellas">
                <img className="estrella" src={Estrella} alt=""/>
                <img className="estrella"  src={Estrella} alt=""/>
                <img className="estrella"  src={Estrella} alt=""/>
                <img className="estrella" src={Estrella} alt=""/>
                <img className="estrella"  src={Estrella} alt=""/>
                <p className="numero">({(estrellas)})</p>
            </div>
            <p>{descripcion}</p>
              <div className="opciones-comprar-habitual">
                  <p>{precio}</p>
                  <button>{comprar}</button>
              </div>
          </div>
      </div>
    )
}

export { TarjetaHabitual }