import React from 'react';
import './Hoja de estilo-Elegirnos/elegirnos.css'
import { TextosElegirnos } from './Textos-Elegirnos';
import { Motivos } from './Motivos';
import EnsaladaIcono from './Imagenes/icons8-ensalada-64.png'
import CarpetaIcono from './Imagenes/icons8-carpeta.svg'
import DeliveryIcono from './Imagenes/icons8-fast-delivery-64.png'

const Elegirnos = () => {
  
  const motivos = [
  {
    id:1,
    img: EnsaladaIcono,
    titulo: 'Comida sana',
    texto: 'Aqui servimos comida sana. Usted puede elegir cualquier alimento que le guste.'
  },
  {
    id:2,
    img: CarpetaIcono,
    titulo: 'La mejor calidad',
    texto: 'La calidad de nuestra comida es excelente. Aqui obtendra exactamente lo que desea.'
  },
  {
    id:3,
    img: DeliveryIcono,
    titulo: 'Entrega rapida',
    texto: 'Se puede decir que el principal objetivo de nuestro repartidor es entregar los pedidos rapidamente.'
  },
]

  return(
    <section className='elegirnos'>
      <div className="contenedor-elegirnos">
        <TextosElegirnos />
        <div className="motivos">
          {motivos.map((motivo) =>{
          const {id,img, titulo, texto} = motivo
          return(
            <Motivos
            key={id}
            img={img}
            titulo={titulo}
            texto={texto}
            />
          )
        })}
        </div>
        
      </div>
    </section>
  )
}

export { Elegirnos }