import React from "react";
import {useState} from "react";
import {db} from "../firebase/firebase"
import { collection, getDoc, getDocs} from "firebase/firestore"


const AboutPage = () => {

  const [reservation, setReservations] = useState([]);
   
    const obtenerReserva = async ()  => {

      const resp = await getDocs(collection(db, "reservas"))
      const data = resp.docs.map((reserva) => ({
        id: reserva.id,
        ...reserva.data(),

      }));

      console.log(data);
      setReservations(data);
    }

    

    return(
      <section>
        <form>
        <div className="tituloForm">Realiza tu reservación mediante el siguiente formulario:
        </div>
        <div className="section">
 <div>
  <label htmlFor="guestname" className="field-label">Escribe tu nombre: </label>
  <label htmlFor="guestname" className="field prepend-icon">
    <input type="text" name="guestname" id="guestname" className="gui-input" required placeholder="Nombre completo"/>
    <span className="field-icon"><i className="fa fa-user" /></span>  
  </label>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="guestemail" className="field-label">Correo: </label>
      <label htmlFor="guestemail" className="field prepend-icon">
        <input type="email" name="guestemail" id="guestemail" className="gui-input" required placeholder="@correo.com"/>
        <span className="field-icon"><i className="fa fa-envelope" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="guestelephone" className="field-label">Telefóno: </label>
      <label htmlFor="guestelephone" className="field prepend-icon">
        <input type="text" name="guestelephone" id="guestelephone" className="gui-input" required placeholder="Telefono"/>
        <span className="field-icon"><i className="fa fa-phone-square" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="adults" className="field-label">Número de Adultos: </label>
      <label htmlFor="adults" className="field prepend-icon">
        <input type="number" id="adults" name="adults" className="gui-input" required placeholder="Adultos"/>
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="children" className="field-label">Número de niños: </label>
      <label htmlFor="children" className="field prepend-icon">
        <input type="number" id="children" name="children" className="gui-input" required placeholder="Número de niños"/>
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="checkin" className="field-label">Fecha de reservación:</label>
      <label htmlFor="checkin" className="field prepend-icon">
        <input type="text" id="checkin" name="checkin" className="gui-input" required placeholder="mm/dd/yyyy"/>
        <span className="field-icon"><i className="fa fa-calendar" /></span>  
      </label>
    </div>
</div>
</div>
</div>

<div className="form-footer">
  <button onClick={obtenerReserva} type="button" className="button btn-success">Obtener Reservaciones</button>
  <button onClick={obtenerReserva} type="button" className="button btn-success">Nueva reservación</button>
</div>
</form>

<section>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Adultos</th>
        <th scope="col">Niños</th>
        <th scope="col">Fecha de reserva</th>
      </tr>
    </thead>
    <tbody>
        {reservation.map((reser)=>(
            <tr key={reser.id}>
            <th scope="row">{reser.id}</th>
            <td>{reser.nombre}</td>
            <td>{reser.correo}</td>
            <td>{reser.telefono}</td>
            <td>{reser.adultos}</td>
            <td>{reser.niños}</td>
            <td>{reser.fecha}</td>
            </tr>
          ))}
    </tbody>
  </table>
</section>





</section>

    ) 
};
export default AboutPage;