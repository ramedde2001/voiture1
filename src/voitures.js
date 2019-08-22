import React ,{ Component } from 'react';
import Chowv from "./chowv"
import Chowvi from "./showid"
export default class Voitures extends Component
	{
		constructor(probs)
		{
			super(probs)
			
			this.state={voitures:[],id:"",detail:false,v:[]}
			this.show=this.show.bind(this)
			this.ret=this.ret.bind(this)
		}
		componentDidMount()
		{
			fetch(this.props.server +"/getvoitures").then(res=>res.json()).then(rr=>{this.setState({voitures:rr})
			console.log(rr)
			
			})
			
			
	
		}
		show(id)
		{
			console.log(id)
		let vc=this.state.voitures.filter(function(v){return (v.id===id)})[0]
		this.setState({detail:true,v:vc})
		console.log(vc)
		}
		ret()
		{
			this.setState({detail:false})
		}
		
		render()
		{
			if(!this.state.detail)
			return (
			<div class="container">
			<div class="row">
			{this.state.voitures.map( v=><Chowv  server={this.props.server} showhn={this.show} voiture={v} />)}
			</div>
			</div>
			
			
			
			)
			else
				return(<div><Chowvi server={this.props.server} ret={this.ret} tocken={this.props.tocken} login={this.props.login}voiture={this.state.v}/></div>)
			
			
		}
		
		
		
		
		
	}