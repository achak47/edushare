import React,{Component} from 'react' ;

class Report extends Component{
    constructor(props){
        super(props) ;
        this.state = {
          desc:''
        }
      } 
      ondescChange = (event)=>{
        this.setState({desc : event.target.value})
      } 
      onpress = ()=>{
        console.log(this.props.email) ;
        fetch('http://localhost:3001/report' , {
          method : 'post' ,
          headers : {'content-type' : 'application/json'} ,
          body : JSON.stringify({
            email : this.props.email ,
            desc : this.state.desc,
            link: this.props.link,
            name:this.props.name,
            reportemail:this.props.Email
          })
        }).then(response => response.json())
          .then(data =>{
            alert(data) ;
            this.props.onUpload('')
      })
    }
    render(){
        const { onRouteChange } = this.props ;
        return(
            <div className='pa4'>
                <button type="button" classNameName="btn btn-danger" onClick={()=>this.props.onUpload('')}> Back</button>
<div class="mb-3 pa3">
  <label for="exampleFormControlTextarea1" class="form-label">What is inappropriate with the file ?</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="A detailed description of the report" onChange={this.ondescChange}></textarea>
</div>
<input onClick={this.onpress} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Report" />
</div>
        )
    }
}

export default Report ;