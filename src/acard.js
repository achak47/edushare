import React from 'react' ;
import './index.css' ;
class Acard extends React.Component{
    onDelete =()=>{
      var e = this.props.id ;
      e = e.replace(this.props.ques,'')
      console.log(e) ;
      if(this.props.email == this.props.Email || this.props.email == e){
        fetch('http://localhost:3001/delanswer' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
             id:this.props.id
            })
          }).then(response => response.json())
            .then(data =>{
              alert(data) ;
              this.props.routeChange('Home') ;
        })
      }
      else{
          alert('You cannot delete others answers')
      }
    }
    render(){
        return(
            <div className='tc bg-light br3 pa3 ma2 grow bw-2 shadow-5'>
      <div>
         <span style={{'float':'left'}}> {this.props.index+1} </span>
        <p>{this.props.desc}</p>
        <p>Answered by : {this.props.name} &nbsp; &nbsp; Dep :{this.props.dep}</p>
      </div>
      <button type="button" classNameName="btn btn-danger" onClick={()=>this.onDelete()}> Delete</button>
    </div>
        )
    }
}
export default Acard;