import React,{Component} from 'react' ;
import './index.css' ;
class Pcardz extends Component {
    delete = (book)=>{
        console.log(this.props.email) ;
        fetch('http://localhost:3001/deletequery' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
            type:this.props.type,
            desc:this.props.desc,
            email:this.props.email
            })
          }).then(response => response.json())
            .then(data =>{
                alert(data) ;
                this.props.onrouteChange('Home') ;
        })
      }
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
            this.props.onAchange('ans',data,this.props.desc) 
      })
      }
    render(){
      const id = this.props.email+this.props.desc
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 bw-2 shadow-5' style={{'width':'30%'}}>
      <div>
        <p>{this.props.dep}</p>
        <h5>{this.props.desc}</h5>
        <br></br>
      </div>
      <div>
      <button type="button" className="btn btn-primary position-relative" onClick={()=>this.onview(id)}>
  View All Answers
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.props.count}
  </span>
</button>
<span>&nbsp; &nbsp; &nbsp;</span>
<button onClick={()=>this.delete(this.props.book)} className='btn btn-danger'>Delete</button>
</div> 
    </div>
     
    );
    }
  }  
  export default Pcardz;