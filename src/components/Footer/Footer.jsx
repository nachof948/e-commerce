import React from 'react';
import './Hoja de estilos-Footer/footer.css'
import { Menu } from './Menu' 
import { Ayuda } from './Ayuda' 
import { Contacto } from './Contacto';
import { Suscribite } from './Suscribite';
const Footer = () => {
  return(
    <footer>
      <div className="contenedor-footer">
        <Menu />
        <Ayuda />
        <Contacto />
        <Suscribite />
      </div>
    </footer>
  )
}

export { Footer }