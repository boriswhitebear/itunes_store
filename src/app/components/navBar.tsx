import { Link, useLocation } from 'react-router-dom'

const NavBar = (props: any) =>  {

  const pathName = useLocation().pathname;

  return (
  <header id="header">
    <div className="container">
      <div id="logo" className="pull-left">
        <Link className="navbar-brand" to="/"><img src="/img/logo_img.png"/></Link>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className={ (pathName === '/musics') ? "menu-active" : ""}><Link className="nav-link"  to="/musics">Search</Link></li>
          <li className={ (pathName === '/history') ? "menu-active" : ""}><Link className="nav-link" to="/history">History</Link></li>
          <li className={ (pathName === '/statistics') ? "menu-active" : ""}><Link className="nav-link" to="/statistics">Statistics</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  );
}

export default NavBar;