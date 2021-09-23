import React from 'react' ;
import './index.css' ;
class Mcard extends React.Component{
    constructor(){
        super() ;
        this.state = {
          desc:''
        } ;
        } ;
    onDelete =()=>{
      if(this.props.email == this.props.Email){
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
          alert('You cannot only delete others answers')
      }
    }
    componentDidMount(){
        fetch('http://localhost:3001/getquestion' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
             id:this.props.id
            })
          }).then(response => response.json())
            .then(data =>{
              this.setState({desc:data})
              console.log(data)
        })
    }
    render(){
        return(
            <div className='tc bg-light br3 pa3 ma2 grow bw-2 shadow-5' style={{'max-width':'50%', 'padding':'2%'}}>
      <div>
        <p><b>{this.state.desc}</b></p>
        <p>{this.props.desc}</p>
      </div>
      <button type="button" classNameName="btn btn-danger" onClick={()=>this.onDelete()}> Delete</button>
    </div>
        )
    }
}
export default Mcard;