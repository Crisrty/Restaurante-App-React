import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Imagen1 from "../assets/hd.png";
import Imagen2 from "../assets/salsas.jpg";
import Imagen3 from "../assets/complementos.jpg";
import Imagen4 from "../assets/familia.jpg";
import Imagen5 from "../assets/pety.jfif";

const HomePage = () => {
    return(
        <>
           <Header />
  <main className="cartas">
<div className="card" style={{width: '18rem'}}>
  <img src={Imagen1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Los Hot-Dogs</h5>
    <p className="card-text">Ven a probar los mejores Hot-Dogs de la ciudad, ¡No te vas a arrepentir!</p>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={Imagen2} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nuestras Salsas secretas</h5>
    <p className="card-text">Tenemos las mejores recetas secretas que te harán llorar, pero de felicidad</p>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src={Imagen3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Los mejores complementos</h5>
    <p className="card-text">Papas a la francesa, aros de cebolla, nugetts, dedos de queso... Los que más se te antojen!</p>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
<img src={Imagen4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Ambiente súper familiar</h5>
    <p className="card-text">Ven con toda tu familia y diviértanse como nunca</p>
  </div>
  </div>

  <div className="card" style={{width: '18rem'}}>
  <img src={Imagen5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Somos PetFriendly</h5>
    <p className="card-text">Porque tu peludo también es parte de la familia, es 100% bienvenido</p>
  </div>
 
</div>
</main>
<Footer />
        </>
    ) 
};
export default HomePage;