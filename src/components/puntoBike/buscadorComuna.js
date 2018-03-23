import React, { Component } from 'react';
import './puntobike.css'; 

class BuscadorComuna extends Component{
	render(){
		return (
						<div className="buscadorComuna">
							<input className="buscador" placeholder="Busca tu puntobike"></input>
						</div>

		)
	}
}

export default BuscadorComuna