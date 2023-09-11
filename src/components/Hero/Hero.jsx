import React from 'react';
import '../Hero/Hojas de estilo Hero/Hero.css'
import Planta from './Imagenes/Planta-Header.png'
import { TextosHero } from './Textos-Hero';
import { ImagenesHero } from './Imagenes-Hero';

const Hero = () => {
  return(
    <section className='hero'>
        <span className="circulo-verde-der"></span>
        <span className="circulo-verde-izq"></span>
        <img className="planta-hero" src={Planta} alt=""></img>
        <div className='contenedor-hero'>
            <TextosHero/>
            <ImagenesHero />
        </div>
    </section>
  )
}

export { Hero }