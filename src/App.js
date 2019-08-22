import React ,{ Component } from 'react';
import Login from "./login"
import Addv from "./addvoiture"
import Voitures from "./voitures"
import Add from "./useradd"
import  Nav from "./navbar"
import Che from "./cherch"
export default class App extends Component{
	
 constructor()
 {
	 super()
	 this.state={login:false ,add:false,tocken:"",view:"default",serverapi:"https://OrderlyStrictSpheres.ramedde2001.repl.co"}
	
	 
	 this.conect=this.conect.bind(this);
	 this.ret=this.ret.bind(this)
	 this.log=this.log.bind(this)
 }

 conect(rt)
 {
	this.setState({tocken:rt,add:this.state.add})

 }
 ret(str)
 {
	 this.setState({view:str,tocken:this.state.tocken})
	
 }
 log()
 {
	 this.setState({add:this.state.add,tocken:this.state.tocken,login:true})
 }
  

 
render()
{
	
	switch(this.state.view)
	{
		case "default":
		return(
		<div class="container">
<Nav retf={this.ret} />
<Login retf={this.ret}  login ={this.state.login} log={this.log} server={this.state.serverapi} connect={this.conect} />



	<Voitures tocken={this.state.tocken} login={this.state.login} server={this.state.serverapi}/>
	</div>)
		break
		case "add":
		return(
		<div class="container">
<Nav retf={this.ret} />
<Addv server={this.state.serverapi}tocken={this.state.tocken} retf={this.ret} />
	</div>)
		break
		case "reg":
		return <div class="container">
<Nav retf={this.ret} />
<Add server={this.state.serverapi}retf={this.ret}  />
	</div>
		
		break
		case "cherche":
		return <div class="container">
<Nav retf={this.ret} />
<Che server={this.state.serverapi}/>
	</div>
		
		break
	}
	
}
}



