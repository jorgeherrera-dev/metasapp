import logo from '../../assets/img/logo.svg';

function Encabezamiento() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo Metas App" />
        <a href="/">Metas App</a>
      </div>
      <nav className="flex">
        <a href="/perfil">Perfil</a>
      </nav>
    </div>
  );
}

export default Encabezamiento; 