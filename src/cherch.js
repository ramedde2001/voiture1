import React ,{ Component } from 'react';
import Chowv from "./chowv"

export default class Cherch extends Component
	{
		constructor(probs)
		{
			super(probs)
			this.state={voitures:[],marque:"",pris:"",anner:"",voituresin:[]}
		}
		componentDidMount()
		{
			this.getall()
			
			
			
		}
		getall()
		{
			fetch( this.props.server+"/getvoitures").then(res=>res.json()).then(rr=>{this.setState({voitures:rr}
			
		
			)
			this.setState({voituresin:rr})
			
			})
		}
		prisc(event)
		{
			this.setState({pris:event.target.value})
			if(event.target.value!=0)
			{
			let voitures=this.state.voituresin
			let voitures1=voitures.filter(function(v){
				console.log("v pris"+v.pris)
				console.log("valeur"+event.target.value)
				console.log(event.target.value>v.pris)
				return (event.target.value>v.pris)})
			this.setState({voitures:voitures1})
			}else
			{
				this.setState({voitures:this.state.voituresin})
			}
		}
		marquec(event)
		{
			this.setState({marque:event.target.value})
			if(event.target.value!=="")
			this.setState({voitures:this.state.voitures.filter(function(str){return str.marque.includes(event.target.value)})})
		else
		{
			this.setState({voitures:this.state.voituresin})
			
		}
		}
				render()
		{
			return (
			<div class="container">
			<div class="row">
			
			<div class="col ">
			<label for="marque">voiture marque</label>
			<input type="text" value={this.state.marque} onChange={(val)=>this.marquec(val)} id="marque"/ >
			</div>
			<div class="col ">
			<label for="prit max">pris maximun </label>
			<input type="text" value={this.state.pris} onChange={(val)=>this.prisc(val)}id="pris" / >
			</div>
			<div for="anner" class="col ">
			<label for="prit">anner</label>
			<input type="text" id="anner" / >
			</div>
			</div>
			
			
			<div class="container">
			<div class="row">
			{this.state.voitures.map( v=><Chowv  server={this.props.server}  voiture={v} />)}
			</div>
			</div>
			</div>
			
			
			
			)
			
			
		}
		
	}