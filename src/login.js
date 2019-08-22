import React ,{ Component } from 'react';
export default class login extends Component{
	constructor(probs)
	{
		super(probs)
		this.state={login:false,pasword:"",username:"",tocken:""}
		this.handleuChange=this.handleuChange.bind(this)
	 this.handlepChange=this.handlepChange.bind(this)
	 this.login=this.login.bind(this);
	}
	componentDidMount()
	{
	
	}
	handleuChange(event)
 {
	 this.setState({username: event.target.value});
 }
  handlepChange(event)
 {
this.setState({pasword: event.target.value});
 }
  login()
 {
	 
	 fetch(this.props.server+"/login",{
    method: 'POST',mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: this.state.username,
            pasword: this.state.pasword
        }
    })
}).then(res=>res.text()).then(rt=>{this.props.connect(rt)
this.props.log()
})
	
		 
		 
 }
	
	render()
{
	console.log(this.props.login)
	if(this.props.login===false)
	return (
    <div >
	<label> username :</label><input type="text" value={this.state.username}  onChange={this.handleuChange} required/>
	<br/>
	<label>pasword :</label><input type="text" value={this.state.pasword}  onChange={this.handlepChange}  required/>
	<br/>
	<button  type="button" onClick={this.login} class="btn btn-primary" > login</button>
    </div>
	
  );
  else
	  return(<div class="row">
  
  <div class="col"> loged in </div>
  <div class="col">
  <button type="button" onClick={(str)=>this.props.retf("add")} class="btn btn-primary" > add voiture </button>
 
  </div>
  
  </div>)
}
	
}