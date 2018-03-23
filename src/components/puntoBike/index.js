import React, { Component } from 'react';
//Components
import BarraBike from './barrabike'; 
import BuscadorComuna from './buscadorComuna'; 
import BarraFavoritos from './barraFavoritos';
import BodyPuntoBike from './bodyPuntoBike';  

class PuntoBike extends Component{
	render(){
		return (
			<div>
				<BarraBike/> 
				<BuscadorComuna/>
				<BarraFavoritos/>
				<BodyPuntoBike/>
			</div>
		)
	}
}

export default PuntoBike