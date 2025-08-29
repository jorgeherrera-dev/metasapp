import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import ListaSVG from '../../img/lista.svg?react';
import NuevaSVG from '../../img/nueva.svg?react';

function Principal({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo 
           to="/lista" 
           texto="Lista de Metas" 
           Icono={ListaSVG} />
        <Vinculo 
           to="/nueva" 
           texto="Nueva Meta" 
           Icono={NuevaSVG} />
      </aside>
      <main className={estilos.main}>
        {children}
      </main>
    </div>
  );
}

export default Principal;