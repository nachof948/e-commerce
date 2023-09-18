import './App.css'
import { ComidaHabitual } from './components/Comida-Habitual/ComidaHabitual'
import { Header }from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Opciones } from './components/Opciones/Opciones'
import { Footer } from './components/Footer/Footer'
import { Elegirnos } from './components/Elegirnos/Elegirnos'
import { ComidaEspecial } from './components/Comida-Especial/ComidaEspecial'
function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Opciones />
      <Elegirnos />
      <ComidaEspecial />
      <ComidaHabitual />
      <Footer />
    </>
  )
}

export default App
