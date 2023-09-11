import React from 'react';
import '../Header/Hoja de estilo Header/BotonesHeader.css'
const BotonesHeader = () => {
  return(
    <div className="header-derecha">
      <div className="header-iconos">
        <a href="#"><i className="bi bi-search"></i></a>
        <a href="#"><i className="bi bi-bag"></i></a>
      </div>
    <div className="registrarse">
        <button>Registarse</button>
      </div>
    </div>
  )
}

export { BotonesHeader }