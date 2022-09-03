import React from "react";
import { NavLink} from "react-router-dom";

const NavBar = () => {
    return(
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <div className="container">
    <NavLink className="nav-link active" to="/home">Los Hot-Dogs</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse tipo_letra" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">Reservaciones</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/menu">Menú</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


)
};

export default NavBar;