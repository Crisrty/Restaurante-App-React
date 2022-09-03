import React from "react";
import {useState} from "react";

const AboutPage = () => {
    const [datosUsusario, setDatosUsuario] = useState({
        guestname: "",
        guestemail: "",
        guestelephone: "",
        adults: "",
        children: "",
        checkin: ""
    })

    const registro = () =>{
        console.log(datosUsusario);
    };

    const cambio = (event) =>{
        setDatosUsuario({
            ...datosUsusario, 
            [event.target.name]: event.target.value
        })
    }


    return(

        <form>
        <div className="tituloForm">Realiza tu reservación mediante el siguiente formulario:
        </div>
        <div className="section">
 <div>
  <label htmlFor="guestname" className="field-label">Escribe tu nombre: </label>
  <label htmlFor="guestname" className="field prepend-icon">
    <input type="text" name="guestname" id="guestname" className="gui-input" required placeholder="Nombre completo" onChange={cambio} />
    <span className="field-icon"><i className="fa fa-user" /></span>  
  </label>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="guestemail" className="field-label">Correo: </label>
      <label htmlFor="guestemail" className="field prepend-icon">
        <input type="email" name="guestemail" id="guestemail" className="gui-input" required placeholder="@correo.com" onChange={cambio} />
        <span className="field-icon"><i className="fa fa-envelope" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="guestelephone" className="field-label">Telefóno: </label>
      <label htmlFor="guestelephone" className="field prepend-icon">
        <input type="text" name="guestelephone" id="guestelephone" className="gui-input" required placeholder="Telefono" onChange={cambio} />
        <span className="field-icon"><i className="fa fa-phone-square" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="adults" className="field-label">Número de Adultos: </label>
      <label htmlFor="adults" className="field prepend-icon">
        <input type="number" id="adults" name="adults" className="gui-input" required placeholder="Adultos" onChange={cambio} />
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="children" className="field-label">Número de niños: </label>
      <label htmlFor="children" className="field prepend-icon">
        <input type="number" id="children" name="children" className="gui-input" required placeholder="Número de niños" onChange={cambio} />
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="checkin" className="field-label">Fecha de reservación:</label>
      <label htmlFor="checkin" className="field prepend-icon">
        <input type="text" id="checkin" name="checkin" className="gui-input" required placeholder="mm/dd/yyyy" onChange={cambio} />
        <span className="field-icon"><i className="fa fa-calendar" /></span>  
      </label>
    </div>
</div>
</div>
</div>

<div className="form-footer">
  <button onClick={registro} type="button" classname="button btn-primary boton">Confirmar Reservación</button>
</div>

</form>


    ) 
};
export default AboutPage;