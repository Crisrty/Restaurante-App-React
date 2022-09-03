import React from "react";
import Footer from "../components/Footer";
import {useState} from "react";
import {db} from "../firebase/firebase"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore"

const formularioInicial = {
  nombre: "",
  correo: "",
  telefono: "",
  adultos: "",
  niños: "",
  fecha: "",
}

const AboutPage = () => {

  const [reservation, setReservations] = useState([]);
  const [form, setForm] = useState(formularioInicial);
   
    const obtenerReserva = async ()  => {

      const resp = await getDocs(collection(db, "reservas"))
      const data = resp.docs.map((reserva) => ({
        id: reserva.id,
        ...reserva.data(),

      }));

      console.log(data);
      setReservations(data);
    };

      const crearReserva= async() => {
        const nuevasReservas = collection(db, "reservas")
        await addDoc(nuevasReservas, form)
        await obtenerReserva();
      };

      const eliminarReserva= async(idReserva) => {
        const documento = doc(db,"reservas", idReserva)
        await deleteDoc(documento)
        await obtenerReserva();
      };

      const actualizarReserva= async(idReserva) => {
       const documento = doc(db, "reservas", idReserva)
       await updateDoc (documento, form)
       await obtenerReserva();
      };

    return(
      <section>
        <form>
        <div className="tituloForm">Realiza tu reservación mediante el siguiente formulario:
        </div>
        <div className="section">
 <div>
  <label htmlFor="guestname" className="field-label">Escribe tu nombre: </label>
  <label htmlFor="guestname" className="field prepend-icon">
    <input type="text" name="guestname" id="guestname" className="gui-input" required placeholder="Nombre completo" value={form.nombre} onChange={(e) => setForm({...form, nombre: e.target.value})}/>
    <span className="field-icon"><i className="fa fa-user" /></span>  
  </label>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="guestemail" className="field-label">Correo: </label>
      <label htmlFor="guestemail" className="field prepend-icon">
        <input type="email" name="guestemail" id="guestemail" className="gui-input" required placeholder="@correo.com" value={form.correo} onChange={(e) => setForm({...form, correo: e.target.value})}/>
        <span className="field-icon"><i className="fa fa-envelope" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="guestelephone" className="field-label">Telefóno: </label>
      <label htmlFor="guestelephone" className="field prepend-icon">
        <input type="text" name="guestelephone" id="guestelephone" className="gui-input" required placeholder="Telefono" value={form.telefono} onChange={(e) => setForm({...form, telefono: e.target.value})}/>
        <span className="field-icon"><i className="fa fa-phone-square" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="adults" className="field-label">Número de Adultos: </label>
      <label htmlFor="adults" className="field prepend-icon">
        <input type="number" id="adults" name="adults" className="gui-input" required placeholder="Adultos" value={form.adultos} onChange={(e) => setForm({...form, adultos: e.target.value})}/>
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
    <div className="section colm colm6">
      <label htmlFor="children" className="field-label">Número de niños: </label>
      <label htmlFor="children" className="field prepend-icon">
        <input type="number" id="children" name="children" className="gui-input" required placeholder="Número de niños" value={form.niños} onChange={(e) => setForm({...form, niños: e.target.value})}/>
        <span className="field-icon"><i className="fa fa-users" /></span>  
      </label>
    </div>
  </div>
  <div className="frm-row">
    <div className="section colm colm6">
      <label htmlFor="checkin" className="field-label">Fecha de reservación:</label>
      <label htmlFor="checkin" className="field prepend-icon">
        <input type="text" id="checkin" name="checkin" className="gui-input" required placeholder="mm/dd/yyyy" value={form.fecha} onChange={(e) => setForm({...form, fecha: e.target.value})}/>
        <span className="field-icon"><i className="fa fa-calendar" /></span>  
      </label>
    </div>
</div>
</div>
</div>

<div className="form-footer">
<button onClick={crearReserva} type="button" className="btn btn-success">Nueva reservación</button>
  <button onClick={obtenerReserva} type="button" className="btn btn-info">Mostrar Reservaciones</button>
  
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
            <td><button onClick={() => eliminarReserva(reser.id)} type="button" className="btn btn-danger">Eliminar</button></td>
            <td><button onClick={() => actualizarReserva(reser.id)} type="button" className="btn btn-warning">Editar Reservación</button></td>
            </tr>
          ))}
    </tbody>
  </table>
</section>
<Footer />
</section>

    ) 
};


export default AboutPage;