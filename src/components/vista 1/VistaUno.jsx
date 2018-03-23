import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import BarraSuperior from './BarraSuperior';
import ContenedorTarjetas from './ContenedorTarjetas';
import BarraInferior from './BarraInferior';
import Mes from './Mes';
import ContenedorEtiqueta from './contenedorEtiqueta'
import  './VistaUno.css';



class VistaUno extends Component {
  render() {
    return(
      <div className="contenedorEtiqueta">
        {/* <BarraSuperior/>       */}
        <ContenedorEtiqueta/>
        <ContenedorEtiqueta/>
        <ContenedorEtiqueta/>
        <ContenedorEtiqueta/>
        <ContenedorEtiqueta/>
        <ContenedorEtiqueta/>
      </div>
     )
  }
}

export default VistaUno;
