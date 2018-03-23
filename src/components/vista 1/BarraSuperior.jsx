import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';


class Barra extends Component {
  render() {
    return(
      <div className="BarraSuperior">       
         <h1 className="viajes"><i className="fas fa-chevron-left fa-1x"></i>Viajes</h1>
      </div>
    )
  }
}

export default Barra;