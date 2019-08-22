import React ,{ Component } from 'react';
export default class Add extends Component{
	constructor()
	{
	super()
	this.state={username:"",pasword:"",email:"",phone:""}
	this.handleunChange=this.handleunChange.bind(this)
	this.handlepaChange=this.handlepaChange.bind(this)
	this.handleemChange=this.handleemChange.bind(this)
	this.handlepoChange=this.handlepoChange.bind(this)
	this.reg=this.reg.bind(this)
	}
	handleunChange(event)
	{
	this.setState({username:event.target.value,pasword:this.state.pasword,email:this.state.email})	
	}
	handlepoChange(event)
	{
	this.setState({phone:event.target.value,pasword:this.state.pasword,email:this.state.email})	
	}
	handlepaChange(event)
	{
	this.setState({username:this.state.username,pasword:event.target.value,email:this.state.email})	
	}
	handleemChange(event)
	{
	this.setState({username:this.state.username,pasword:this.state.pasword,email:event.target.value})	
	}
	reg()
	{
		fetch(this.props.server+"/adduser",{method: 'POST',headers: {
        'Content-Type': 'application/json'}, 
		body: JSON.stringify(
	    {
		user:{username:this.state.username,pasword:this.state.pasword,email:this.state.email,phone:this.state.phone}
		}
		                                      
		)}
	).then(rs=>rs.text()).then(tx=>{if(tx==="user add")
	this.props.retf("default")});
	}
	render()
	{
		return(<form style={{justifycontent:'center'}}>
		
		<label for="username"> username </label><input type="text" value={this.state.username} onChange={this.handleunChange}id="username" class="form-control"/><br/>
		<label for="pasword"> pasword </label><input type="text" value={this.state.pasowrd} onChange={this.handlepaChange}id="pasword" class="form-control"/><br/>
		<label for="email"> email </label><input type="text" value={this.state.email} onChange={this.handleemChange}id="email" class="form-control"/><br/>
		<label for="phone number"> phone number </label><input type="text" value={this.state.phone} onChange={this.handlepoChange}id="phone number" class="form-control"/><br/>
		<button  type="button" class="btn btn-primary"  onClick={this.reg}>regist</button>
		<button  type="button" class="btn btn-primary"  onClick={()=>this.props.retf("default")}>return</button>
		</form>)
		
	}
	
	
}