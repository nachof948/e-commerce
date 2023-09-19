import React from 'react';
import './Hoja de estilo-chefs/chefs.css'
import ChefUno from './Imagenes/chef1.png'
import ChefDos from './Imagenes/chef2.png'
import ChefTres from './Imagenes/chef3.png'
const Chefs = () => {
  return(
    <section className='chefs'>
      <div className="contenedor-chefs">
        <div className="texto-chefs">
          <h2>NUESTROS CHEF'S ESPECIALES</h2>
          <p>A continuación se presentan algunos de nuestros chefs especiales que trabajan para preparar sus comidas.</p>
        </div>
        <div class="chefs-img">
          <img class="uno" src={ChefUno} alt=""/>
          <img class="dos" src={ChefDos} alt=""/>
          <img class="tres" src={ChefTres} alt=""/>
        </div>
      </div>
    </section>
  )
}

export { Chefs }