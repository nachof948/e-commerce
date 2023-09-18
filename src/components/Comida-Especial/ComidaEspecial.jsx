import React from 'react';
import './Hoja de estilos Comida-Especial/comidaEspecial.css'
import { TextosComidaEspecial } from './TextosComidaEspecial';
import { Especial } from './Especial';
import Ensalada from './Imagenes/ensalda.jpg'
import Pescado from './Imagenes/pescado.jpeg'
import HuevoMasala from './Imagenes/toshuev.jpg'
import uniqid from 'uniqid';
const ComidaEspecial = () => {
  
  const especiales = [
    {
      id: uniqid(),
      img: Ensalada,
      titulo:'Ensalada',
      precio: '$2.50'
    },
    {
      id: uniqid(),
      img: HuevoMasala,
      titulo:'Huevos Masala',
      precio: '$3.40'
    },
    {
      id: uniqid(),
      img: Pescado,
      titulo:'Pescado Frito',
      precio: '$4.00'
    },
  ]

  return(
    <section className='comida-especial'>
      <div className="comida-especial-contenedor">
        <TextosComidaEspecial />
        <div className="especiales">
          {especiales.map((especial) =>{
            const {id, img, titulo, precio} = especial
            return(
              <Especial
                key={id}
                id={id}
                img={img}
                titulo={titulo}
                precio={precio}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { ComidaEspecial }