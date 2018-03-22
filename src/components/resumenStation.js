import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Label } from 'react-bootstrap'; 
import Estacionamiento from './../img/estacion-salvador-bikesantiago.jpg'; 
import './resumenStation.css';


class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <img className="img-est"src={Estacionamiento} alt="estacionamiento_bikeSantiago"/>
          </Modal.Header>
          <Modal.Body>
          	<h3>Nombre Estacionamiento</h3>
          	<h5>Sub Nombre Estacionamiento</h5>
          	<Label className="label-info">Parking</Label>
          	<Label className="label-info">Biclycle</Label>
           
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Example