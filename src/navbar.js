import React ,{ Component } from 'react';
const style={
	paddingLeft:'50px',
	paddingRight:'50px'
}
export default class Navbare extends Component
	{
		constructor(probs)
		{
		super(probs)
		
		}
		render()
		{
			return(
			<nav  class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
  <div class="container-fluid">
  <div class="navbar-header">
  <a  class="navbar-brand">voiture app</a>
  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span>
        <span class="navbar-toggler-icon"></span>
      </button>
      
	  </div>
	  <div class="collapse navbar-collapse" id="myNavbar">
	  <ul class="nav navbar-nav navbar-right ">
	
    <button  onClick={()=>this.props.retf("default")} class="navbar-btn btn-info" style={style}> home</button> 
	<button  onClick={()=>this.props.retf("reg")}  class="navbar-btn btn-info"style={style}> registe</button> 
	<button  onClick={()=>this.props.retf("cherche")}class="navbar-btn btn-info"style={style}> <span class="glyphicon glyphicon-search"></span> Search</button>
	
	</ul>
	</div>

 </div>
</nav>
			
			)
		}
		
	}