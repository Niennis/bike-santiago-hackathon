import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ResumenMes from './ResumenMes';
import TotalCobrosAdicionales from './TotalCobrosAdicionales';
import Fecha from './Fecha';

class ContenedorTarjetas extends Component {
    render() {
      return(
        <div className="ContenedorTarjetas">
          <Fecha/>
          <ResumenMes/>
          <TotalCobrosAdicionales/>
        </div>
    )
  }
}

export default ContenedorTarjetas;
