import React from 'react';
import { ComidaHabitualTextos } from './ComidaHabitualTextos';
import '../Comida-Habitual/Hojas de estilo Comida-Habitual/ComidaHabitual.css'
import uniqid from 'uniqid';
import ChickenBurger from './Imagenes/Chicken Burger.jpg'
import Paella from './Imagenes/Paella.jpg'
import Pizza from './Imagenes/Pizza.jpg'
import Postre from './Imagenes/Postre.jpg'
import { TarjetaHabitual } from './TarjetaHabitual';

const ComidaHabitual = () => {
  const comidasHabituales = [
    {
      id: uniqid(),
      img: ChickenBurger,
      titulo:"Hamburguesa",
      descripcion:"Esta es una excelente hamburguesa de pollo y muy saludable.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 158
    },
    {
      id: uniqid(),
      img: Pizza,
      titulo:"Pizza",
      descripcion:"Esta es una excelente pizza margherita y una elección clásica y saludable.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 97
    },
    {
      id: uniqid(),
      img: Paella,
      titulo:"Paella",
      descripcion:"Esta es un excelente paella con mariscos y una elección clásica y saludable.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 174
    },
    {
      id: uniqid(),
      img: Postre,
      titulo:"Panqueques",
      descripcion:"Estos son unos excelentes panqueques de frutilla con crema, un postre clasico.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 93
    },
    {
      id: uniqid(),
      img: ChickenBurger,
      titulo:"Hamburguesa",
      descripcion:"Esta es una excelente hamburguesa de pollo y muy saludable.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 198
    },
    {
      id: uniqid(),
      img: Paella,
      titulo:"Paella",
      descripcion:"Esta es un excelente paella con mariscos y una elección clásica y saludable.",
      precio:"2.250",
      comprar: "Comprar ahora",
      estrellas: 187
    }
  ]
  return(
    <section className='comida-habitual'>
      <div className="contenedor-comida-habitual">
        <ComidaHabitualTextos />
        <div className="comidas">
          {comidasHabituales.map((comida) =>{
          const {id, img, titulo, descripcion, precio, comprar,estrellas} = comida
          return(
            <TarjetaHabitual 
            key={id}
            img={img}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            comprar={comprar}
            estrellas={estrellas}
            />
          )
        })}
        </div>
      </div>
    </section>
  )
}

export { ComidaHabitual }