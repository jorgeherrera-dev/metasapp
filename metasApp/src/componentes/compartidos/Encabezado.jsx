import estilos from './Encabezado.module.css';
import LogoSVG from '../../img/logo.svg?react';
import PerfilSVG from '../../img/perfil.svg?react';
import Vinculo from './Vinculo';

function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a className="titulo" href="/">Metas App</a>
      </div>
      <nav>
          <Vinculo
              href="/perfil" 
              Icono={PerfilSVG} />
      </nav>
    </header>
  );
}

export default Encabezado; 