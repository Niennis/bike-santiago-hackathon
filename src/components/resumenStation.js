import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Label } from 'react-bootstrap'; 
import Estacionamiento from './../img/estacion-salvador-bikesantiago.jpg';
import './resumenStation.css';

class Example extends Component {
  constructor(props, context, station) {
    super(props, context, station);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShowFooter = this.handleShowFooter.bind(this); 


    this.state = {
      show: false, 
      showFooter: false,
      station 
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleShowFooter (){
    this.setState({ showFooter: true });
  }


  render() {
    const {station} = this.state;
    return (
      <div onClick={this.handleShow}>
        {/* <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <img className="img-est"src={Estacionamiento} alt="estacionamiento_bikeSantiago"/>
          </Modal.Header>
          <Modal.Body>
          	<h3>{station}</h3>
          	<h5>Recoleta #789</h5>
          	<Label className="label-info">Parking<span>5</span></Label>
          	<Label className="label-info">Biclycle<span>5</span></Label>
          	<Button className="info-reportar" onClick={this.handleCloseFooter}>Reportar</Button>       
          </Modal.Body>
          <Modal.Footer>
          	<h4>Seleccione el problema que necesita reportar</h4>
          	<select className="selectInput" name="carlist" form="carform">
						  <option className="options" value="frenos">Frenos Malos</option>
						  <option className="options" value="pinchar">Bicicleta Pinchada</option>
						  <option className="options" value="luz">Luz Led mala</option>
						  <option className="options" value="otro">Otro</option>
						</select>
          </Modal.Footer>       
        </Modal>
      </div>
    );
  }
}

export default Example

/*


  handleCloseFooter(){
  	this.setState({ showFooter: false});
  }

  handleShowFooter(){
  	this.setState({ showFooter: true}); 
  }

showFooter={this.state.showFooter} onHideFooter={this.handleCloseFooter}
*/