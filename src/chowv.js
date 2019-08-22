import React ,{ Component } from 'react';
const style={
	width:'18rem ',
	height: '100%',
}
export default class Voitures extends Component
	{
		constructor(probs)
		{
		super(probs)
		
		}
		render()
		{
			
		return (
		<div classe="col col-4">
		<div class="card" style={style}>
		
         <img src={this.props.voiture.url} class="card-img-top" alt="image dont found"/>
		 
		 <div class="card-body">
		 <h5 class="card-title">{this.props.voiture.marque}</h5>
		 <p class="card-text">anner:{this.props.voiture.anner} pris: {this.props.voiture.pris}milion</p>
		 <button onClick={()=>this.props.showhn(this.props.voiture.id)}>show detaill</button>
		 </div>
		 
		</div>
		</div>
		)
		
		
		}
		
		
	}