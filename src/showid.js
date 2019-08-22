import React ,{ Component } from 'react';
const style={
	width:'18rem ',
	height: '100%',
}
export default class Chowid extends Component
	{
		constructor(probs)
		{
		super(probs)
		this.state={oferv:"",ofers:[]}
		this.ofer=this.ofer.bind(this)
		this.addofre=this.addofre.bind(this)
		this.update=this.update.bind(this)
		}
		ofer(event)
		{
			this.setState({oferv:event.target.value})
		}
		componentDidMount()
		{
			fetch(this.props.server+"/ofere/"+this.props.voiture.id).then(re=>re.json()).then(txt=>this.setState({ofers:txt}))
			
		}
		update(){
			fetch(this.props.server+"/ofere/"+this.props.voiture.id).then(re=>re.json()).then(txt=>this.setState({ofers:txt}))
		}
			
		addofre()
		{
					fetch(this.props.server +"/addofere",{method: 'POST',headers: {'Content-Type': 'application/json'},  body: JSON.stringify({tocken:this.props.tocken,voiture_id:this.props.voiture.id,pris:this.state.oferv})}).then(rs=>rs.text()).then(txt=>{if (txt=="offer add")this.update()})
			
		}
		render()
		{
			
		return (
		<div>
         <img src={this.props.voiture.url} class="card-img-top" alt="image dont found"/>
		 
		
		 <h5>{this.props.voiture.marque}</h5>
		 <p >model:{this.props.voiture.model} </p>
		 <p >anner:{this.props.voiture.anner} pris: {this.props.voiture.pris}milion</p>
		 <p >username:{this.props.voiture.username} </p>
		 <p >email:{this.props.voiture.email} </p>
		 <p >kilometrage:{this.props.voiture.klm} </p>
		 <button onClick={this.props.ret}>return</button>
		 <br/>
		 {this.state.ofers.map(ofer=><div>ofer de :{ofer.pris} from  user {ofer.username}</div>)}
		 {this.props.login &&
		 <input  value ={this.state.oferv} onChange={this.ofer} type="text"/>}
		<br/>
		{this.props.login &&<button  onClick={this.addofre}> donner un offer </button>}
		 
		
		</div>
		
		)
		
		
		}
		
		
	}