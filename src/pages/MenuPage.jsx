import React from "react";
import Footer from "../components/Footer";

const MenuPage = () => {
    return(
        <>
        <main className="row">
            <article className="col">
        <table className="table">
  <thead>
    <tr className="cabeza-tabla-menu">
      <th scope="col">#</th>
      <th scope="col">Hot-Dog</th>
      <th scope="col">Complementos</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-menu">
      <th scope="row">1</th>
      <td>Clasico</td>
      <td>Aderezos y picante</td>
      <td>El clásico Hot-Dog </td>
      <td>$25 </td>
    </tr>
    <tr className="text-menu">
      <th scope="row">2</th>
      <td>El mediano</td>
      <td>Aderezos, picante y papas a la francesa</td>
      <td>Un poco más grande que el clásico, tiene queso y tocino</td>
      <td>$35 </td>
    </tr>
    <tr className="text-menu">
      <th scope="row">3</th>
      <td>El grande</td>
      <td>Aderezos, picante, refreso mediano y papas a la francesa</td>
      <td>El mero mero, tiene queso y  doble tocino</td>
      <td>$45 </td>
    </tr>
    <tr className="text-menu">
      <th scope="row">4</th>
      <td>El gigante</td>
      <td>Aderezos, picante, refreso grande y papas a la francesa</td>
      <td>Con este si te llenas, tiene 3 tipos de queso y  triple tocino</td>
      <td>$60 </td>
    </tr>
  </tbody>
</table>

            </article>
        </main>
        <Footer />
        </>
    )
};

export default MenuPage;