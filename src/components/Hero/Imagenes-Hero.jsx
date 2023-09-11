import React from 'react';
import '../Hero/Hojas de estilo Hero/Imagenes-Hero.css'
/* IMAGENES */
import  HeroPrincipal  from '../Hero/Imagenes/Hero-Principal.png'
import  Panqueque  from '../Hero/Imagenes/Panqueques.png'
import Pancakes from '../Hero/Imagenes/Pancakes.png'
import Pescado from '../Hero/Imagenes/Pescado.jpg'
import Vegetales from '../Hero/Imagenes/Vegetales.png'
import Arroz from '../Hero/Imagenes/Arroz.jpg'

const ImagenesHero = () => {
  return(
    <div className="imagenes-hero">
      <img className="hero-comida-principal" src={HeroPrincipal} alt="Ensalada"/>
      <img className="hero-comida-pequeña panqueque" src={Panqueque} alt="Panqueque"/>
      <img className="hero-comida-pequeña pancakes" src={Pancakes} alt="Pancakes"/>
      <img className="hero-comida-pequeña pescado" src={Pescado} alt="Pescado"/>
      <img className="hero-comida-pequeña vegetales" src={Vegetales} alt="Vegetales"/>
      <img className="hero-comida-pequeña arroz" src={Arroz} alt="Arroz"/>
    </div>
    )
}

export { ImagenesHero }