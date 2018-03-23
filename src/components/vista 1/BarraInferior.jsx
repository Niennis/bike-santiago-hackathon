import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class BarraInferior extends Component {
  render() {
    return(
      <div className="BarraInferior">
        <Navbar className="fixedBottom navinf">
          <i className="navbarIcons fas fa-align-right fa-2x"></i>
          <i className="navbarIcons fas fa-map-marker-alt fa-2x"></i>
          <i className="navbarIcons fas fa-user fa-2x"></i>
          <i className="navbarIcons fas fa-phone-volume fa-2x"></i>
        </Navbar>
      </div>
    )
  }
}

export default BarraInferior;