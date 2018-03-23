import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import BarraSuperior from './BarraSuperior';
import ContenedorTarjetas from './ContenedorTarjetas';
import BarraInferior from './BarraInferior';
import Mes from './Mes';
import  './VistaUno.css';



class ContenedorEtiqueta extends Component {
  render() {
    return(
      <div className="VistaUno">
        <BarraSuperior/>
        <Mes/>
        <ContenedorTarjetas/>
        <BarraInferior/>
      </div>
     )
  }
}

export default ContenedorEtiqueta;
