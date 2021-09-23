import React from 'react' ;
import './index.css' ;
class Qcard extends React.Component{
  constructor(){
    super() ;
    this.state = {
      ans:[]
    } ;
    } ;
  onview=(id)=>{
    fetch('http://localhost:3001/retanswer' , {
      method : 'post' ,
      headers : {'content-type' : 'application/json'} ,
      body : JSON.stringify({
       id:id
      })
    }).then(response => response.json())
      .then(data =>{
        this.setState({ans:data})
        console.log(data)
        this.props.onachange('ans',data,this.props.desc) 
  })
  }
  render(){ 
    const id = this.props.email+this.props.desc
  return (
      <div className='tc bg-light br3 pa3 ma2 grow bw-2 shadow-5' style={{'max-width':'40%', 'padding':'2%'}}>
      <div>
        <h5><b>{this.props.desc}</b></h5>
        <p>{this.props.dep}</p>
        <p>Student : {this.props.name}</p>
        <p><b>Contact Number</b> : {this.props.contact1} <b>Email</b> : {this.props.email}</p>
      </div>
      <div>
      <button type="button" className="btn btn-primary position-relative" onClick={()=>this.onview(id)}>
  View All Answers
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.props.count}
  </span>
</button>
<span>&nbsp; &nbsp; &nbsp;</span>
<button type="button" className='btn btn-danger' onClick={()=>this.props.onqchange('answer',id,this.props.desc,this.props.email)}>Post an answer</button>
</div> 
    </div>
    );
  }
  }  
  export default Qcard;