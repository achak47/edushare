import React,{Component} from 'react' ;

class Query extends Component{
    constructor(props){
        super(props) ;
        this.state = {
          contact1 : '' ,
          contact2:'',
          desc : '' ,
          email : '' ,
          dep :'',
          name:'',
          year:''
        }
      } 
      ondescChange = (event)=>{
        this.setState({desc : event.target.value})
      } 
      onDepChange = (event)=>{
        this.setState({dep : event.target.value})
      }
      oncontact1Change = (event)=>{
        this.setState({contact1 : event.target.value})
      }
      oncontact2Change = (event)=>{
        this.setState({contact2 : event.target.value})
      }
      onpress = ()=>{
        console.log(this.state) ;
        fetch('http://localhost:3001/queries' , {
          method : 'post' ,
          headers : {'content-type' : 'application/json'} ,
          body : JSON.stringify({
            email : this.props.email ,
            desc : this.state.desc,
            dep:this.props.dep,
            year:this.props.year,
            contact1:this.state.contact1,
            contact2:this.state.contact2,
            name:this.props.name
          })
        }).then(response => response.json())
          .then(data =>{
            alert(data) ;
      })
    }
    render(){
        const { onRouteChange } = this.props ;
        return(
            <div>
                <button type="button" classNameName="btn btn-danger" onClick={()=>onRouteChange('Home')}> Back to Home</button>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Enter your question Here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="A detailed description of your Query " onChange={this.ondescChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact 1</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your contact number" onChange={this.oncontact1Change} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact 2</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Alternate contact number " onChange={this.oncontact2Change} />
</div>
<input onClick={this.onpress} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Post My Query" />
</div>
        )
    }
}

export default Query ;