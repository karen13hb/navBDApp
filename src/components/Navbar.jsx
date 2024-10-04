import React from 'react';
import { NavLink } from 'react-router-dom';  // Importa NavLink desde react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Drango Ball APP</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarScroll" 
          aria-controls="navbarScroll" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/personajes"
              >
                Personajes
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/detalle"
              >
                Detalle
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
