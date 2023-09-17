import './App.css'
import { ComidaHabitual } from './components/Comida-Habitual/ComidaHabitual'
import { Header }from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Opciones } from './components/Opciones/Opciones'
import { Footer } from './components/Footer/Footer'
function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Opciones />
      <ComidaHabitual />
      <Footer />
    </>
  )
}

export default App
