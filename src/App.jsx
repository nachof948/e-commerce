import './App.css'
import { ComidaHabitual } from './components/Comida-Habitual/ComidaHabitual'
import { Header }from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Opciones } from './components/Opciones/Opciones'
function App() {


  return (
    <>
      <Header/>
      <Hero />
      <Opciones />
      <ComidaHabitual />
    </>
  )
}

export default App
