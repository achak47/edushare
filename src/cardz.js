import React,{Component} from 'react' ;
import './index.css' ;
class Cardz extends Component {
    delete = (book)=>{
        console.log(this.props.email) ;
        fetch('http://localhost:3001/deletead' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
             book:book,
             email:this.props.email
            })
          }).then(response => response.json())
            .then(data =>{
                alert(data) ;
                this.props.onrouteChange('myads') ;
        })
      }
    render(){
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 bw-2 shadow-5'>
      <img src={this.props.image} class="card-img-top" alt="Image Loading..."></img>
      <div>
        <h5>{this.props.book}</h5>
        <h3><b> Rs {this.props.price}</b></h3>
        <p>{this.props.dep}</p>
        <p>{this.props.desc}</p>
        <p>Contact Number : {this.props.contact1}</p>
        <br></br>
      </div>
      <button className='btn btn-danger' onClick={()=>this.delete(this.props.book)}>Delete</button>
    </div>
     
    );
    }
  }  
  export default Cardz;