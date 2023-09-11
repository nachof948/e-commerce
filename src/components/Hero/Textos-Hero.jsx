import React from 'react';
import '../Hero/Hojas de estilo Hero/Textos-Hero.css'

const TextosHero = () => {
  return(
      <div className="textos-hero">
          <button className="btn-hero-pregunta">Hambriento?</button>
          <h1>SOLO VEN A FOODIED & ORDENA</h1>
          <p>Aquí encontrarás comida pura y de la mejor calidad. Ordene ahora para satisfacer su hambre</p>
          <div className="btns-hero">
              <button className="btn-hero-izq">Ordena Ahora</button>
                        <button className="btn-hero-der">Explorar Mas <span><i className="bi bi-arrow-right"></i></span></button>
          </div>
      </div>
    )
}

export { TextosHero }