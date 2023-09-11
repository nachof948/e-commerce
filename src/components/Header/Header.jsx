import  {useEffect, React} from 'react';
import '../Header/Hoja de estilo Header/Header.css'
import { NavBar } from './NavBar';
import { NombreEmpresa} from './NombreEmpresa'
import { BotonesHeader } from './BotonesHeader';

const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header')
    if(header){
      const manejarScroll = () =>{
        if(window.scrollY > 0){
            header.style.backgroundColor = 'rgb(132,183,78)';
            header.style.padding = '0rem 0rem';
        } else{
          header.style.backgroundColor = 'transparent';
        }
      };
      window.addEventListener('scroll', manejarScroll);
    }
  },[])

  return(
    <header id="header">
        <div className="contenedor-header">
          <NombreEmpresa />
          <NavBar />
          <BotonesHeader />
        </div>
    </header>
  )
}

export { Header }