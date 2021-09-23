import React,{Component} from 'react' ;

class Anspost extends Component{
  constructor(){
    super() ;
    this.state = {
      ans:'',
    } ;
    } ;
    onanschange = (event)=>{
        this.setState({ans:event.target.value})
    }
    onsubmit = ()=>{
      if(this.props.email === this.props.Email)
      {
        alert('You cannot answer your own question !')
      }
      else{
      if(this.state.ans == ''){
        alert('You cant post a blank answer !')
      }
      else{
      console.log('Submitting')
      fetch('http://localhost:3001/answer' , {
        method : 'post' ,
        headers : {'content-type' : 'application/json'} ,
        body : JSON.stringify({
         content:this.state.ans,
         author:this.props.name,
         id:this.props.id,
         dep:this.props.dep,
         year:this.props.year,
         count:this.props.count,
         email:this.props.email
        })
      }).then(response => response.json())
        .then(data =>{
          alert(data) ;
          this.props.routeChange('Home')
    })
  }
} 
    }
  render(){
      return(
        <div className='pa4'>
        <button type="button" classNameName="btn btn-danger" onClick={()=>this.props.onrchange('question')}> Back</button>
<div class="mb-3 pa3">
  <h3>Question : {this.props.desc}</h3>
<label for="exampleFormControlTextarea1" class="form-label">Write Your Answer Here</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="A detailed description of the report" onChange={this.onanschange}></textarea>
</div>
<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Post" onClick={this.onsubmit} />
</div>
      )
  }
}
export default Anspost ;