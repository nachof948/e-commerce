import React from 'react';
import './Hoja de estilos-Footer/suscribite.css'
const Suscribite = () => {
  return(
    <div className='suscribite'>
      <h2>Suscribite a</h2>
      <h2>Nuestro Boletin</h2>
      <form action="">
        <input type="email" placeholder='Ingresa tu email' />
        <span><button>Suscribite</button></span>
      </form>
    </div>
  )
}

export { Suscribite }