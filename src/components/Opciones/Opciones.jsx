import React from 'react';
import { Tarjeta } from './Tarjeta' 
import ChickenBurger from './Imagenes/Chicken Burger.jpg'
import Paella from './Imagenes/Paella.jpg'
import Pizza from './Imagenes/Pizza.jpg'
import Postre from './Imagenes/Postre.jpg'
import uniqid from 'uniqid';
import '../Opciones/Hojas de estilo Opciones/Opciones.css'
const Opciones = () => {
  
  const opcionesGatronomicas = [
    {
      id: uniqid(),
      img: ChickenBurger,
      titulo:"Hamburguesa",
      descripcion:"Esta es una excelente hamburguesa de pollo y muy saludable.",
      precio:"2.250",
      comprar: "Comprar ahora"
    },
    {
      id: uniqid(),
      img: Pizza,
      titulo:"Pizza",
      descripcion:"Esta es una excelente pizza margherita y una elección clásica y saludable.",
      precio:"2.250",
      comprar: "Comprar ahora"
    },
    {
      id: uniqid(),
      img: Paella,
      titulo:"Paella",
      descripcion:"Esta es un excelente paella con mariscos y una elección clásica y saludable.",
      precio:"2.250",
      comprar: "Comprar ahora"
    },
    {
      id: uniqid(),
      img: Postre,
      titulo:"Panqueques",
      descripcion:"Estos son unos excelentes panqueques de frutilla con crema, un postre clasico.",
      precio:"2.250",
      comprar: "Comprar ahora"
    }
  ]
  return(
    <section className="seccion-opciones">
      <div className="contenedor-opciones">
        {opcionesGatronomicas.map((opcion) =>{
          const {id, img, titulo, descripcion, precio, comprar} = opcion
          console.log(opcion.id)
          return (
            <Tarjeta
            key={id}
            id={id}
            img={img}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            comprar={comprar}
            />
          )
        })}
      </div>
    </section>
    )
}

export { Opciones }