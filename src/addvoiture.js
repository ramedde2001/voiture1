import React ,{ Component } from 'react';
export default class login extends Component{
	
	constructor(probs)
	{
		super(probs)
		this.state={anner:"",marque:"",pris:"",url:"",model:"",km:"",isimage:false}
		this.handlevmChange=this.handlevmChange.bind(this)
		this.handlevaChange=this.handlevaChange.bind(this)
		this.handlevpChange=this.handlevpChange.bind(this)
		this.handlekmChange=this.handlekmChange.bind(this)
		this.handlemoChange=this.handlemoChange.bind(this)
		this.addv=this.addv.bind(this)
		this.upload=this.upload.bind(this)
	}
	handlemoChange(event)
	{
	this.setState({model: event.target.value});	
	}
	handlekmChange(event)
	{
	this.setState({km: event.target.value});	
	}
	handlevmChange(event)
	{
	this.setState({marque: event.target.value});	
	}
	handlevaChange(event)
	{
	this.setState({anner: event.target.value});	
	}
	handlevpChange(event)
	{
	this.setState({pris: event.target.value});	
	}
	upload()
	{
		
	
	const myInput = document.getElementById('my-input');
	const formData = new FormData();
	formData.append('file', myInput.files[0]);
	
			
			fetch(this.props.server +"/uploadc", {
  method: 'POST',
  body: formData
}).then((res)=>res.json()).then(re=> {this.setState({url:re.url,isimage:true})})
	
	}
	addv()
	{
		
			if(this.state.isimage===true)
			{
	
		fetch(this.props.server +"/addv",{method: 'POST',headers: {
        'Content-Type': 'application/json'},  body: JSON.stringify({
        voiture: {
            anner:this.state.anner,
			marque:this.state.marque,
			pris:this.state.pris,
			url:this.state.url,
			token:this.props.tocken,
			km:this.state.km,
			model:this.state.model
			
        }
    })
		
    }).then(rs=>{
		if(rs.status===200)
		{
			
			rs.text().then(ft=>{
			this.props.retf("default")
			})

		}
			
			
			
			
			
			
			
			
			
			
			
			
		
		
		else
			console.log("eror ")
		
	
			})}
	}
		
	
	render()
	{
		 return(<div><div> 
		 
  <spam>add voiture</spam>
  <div class="form-group">
  <label for="marque">voiture marque</label>
  <input type="text" value={this.state.marque} class="form-control" onChange={this.handlevmChange} id="marque"/>
	</div>
	<div class="form-group">
	<label for="anner">voiture anner</label>
<input type="text" value={this.state.anner} class="form-control"  onChange={this.handlevaChange} id="anner"/>
	</div>
	<div class="form-group">
	<label for="model">voiture model</label>
<input type="text" value={this.state.model} class="form-control"  onChange={this.handlemoChange} id="model"/>
	</div>
	<div class="form-group">
	<label for="km">kilomtrage</label>
<input type="text" value={this.state.km} class="form-control"  onChange={this.handlekmChange} id="km"/>
	</div>
	<div class="form-group">
	<label for="pris">voiture pris </label>
	 <input type="text" value={this.state.pris} class="form-control"  onChange={this.handlevpChange} id="pris"/>
	</div>
	<input type="file" id="my-input" accept="image/png, image/jpeg"/>
	<button class="btn btn-primary" type="button" onClick={this.upload} >upload foto </button>
		{this.state.isimage&&<img src={this.state.url} />}
	<div class="container">
	<div class="row">
	<div class="col">
	
	
	</div>
	<button class="btn btn-primary" type="button" onClick={this.addv} >added voiture </button>
	<div class="col">
	<button class="btn btn-primary" typer="button" onClick={()=>this.props.retf("default")}>return </button>
	</div>
	
  </div>
  </div>
  </div>
  
  </div>
  )
	}
	
	
}