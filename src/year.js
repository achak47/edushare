import React,{Component} from 'react' ;
import Resources from './resource' ;
class Year extends Component{
    constructor(){
        super() ;
        this.state = {
          year:'',
          r:'',
          links:[],
          links1:[],
          links2:[],
          links3:[],
          links4:[],
          links5:[],
          y1:0,
          y2:0,
          y3:0,
          y4:0,
          y5:0
        } ;
        } ;
        componentDidMount() {
      this.onretrieve(1) ;
      this.onretrieve(2) ;
      this.onretrieve(3) ;
      this.onretrieve(4) ;
      this.onretrieve(5) ;
        }
        onretrieve =(year)=>{
          fetch('http://localhost:3001/retrieve' , {
            method : 'post' ,
            headers : {'content-type' : 'application/json'} ,
            body : JSON.stringify({
              folder: this.props.route + year
            })
          }).then(response => response.json())
            .then(data =>{
                if(year==1) {this.setState({y1:data.length,links1:data}) ;}
                if(year==2) {this.setState({y2:data.length,links2:data}) ;}
                if(year==3) {this.setState({y3:data.length,links3:data}) ;}
                if(year==4) {this.setState({y4:data.length,links4:data}) ;}
                if(year==5) {this.setState({y5:data.length,links5:data}) ;}
        })
        }
        onyearchange=(year)=>{
          if(year==1) {this.setState({links:this.state.links1}) ;}
          if(year==2) {this.setState({links:this.state.links2}) ;}
          if(year==3) {this.setState({links:this.state.links3}) ;}
          if(year==4) {this.setState({links:this.state.links4}) ;}
          if(year==5) {this.setState({links:this.state.links5}) ;}
          this.setState({year:year,r:'resources'}) ;
    }
    onrchange=(route,year)=>{
        this.setState({r:route}) ;
        this.onretrieve(year) ;
    }
    render(){
        return(
    this.state.r == 'resources'?< Resources dep={this.props.route} year={this.state.year} rchange={this.onrchange} email={this.props.email} links={this.state.links}
    onrouteChange={this.props.onrouteChange} name={this.props.name} reports={this.props.reports} loadreport={this.props.loadreport}/>
    :<div>
    <div className='row row-cols-2 pa5' style={{"row-gap": "1rem"}}>
    <div className='col'><button type="button" class="btn btn-outline-dark position-relative" onClick={()=>this.onyearchange(1)}>1st Year
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.state.y1}</span>
   </button></div>
    <div className='col'><button type="button" class="btn btn-outline-dark position-relative" onClick={()=>this.onyearchange(2)}>2nd Year
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.state.y2}</span>
    </button></div>
    <div className='col'><button type="button" class="btn btn-outline-dark position-relative" onClick={()=>this.onyearchange(3)}>3rd Year
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.state.y3}</span>
    </button></div>
    <div className='col'><button type="button" class="btn btn-outline-dark position-relative" onClick={()=>this.onyearchange(4)}>4th Year
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.state.y4}</span>
    </button></div>
    </div>
    <div className='col'><button type="button" class="btn btn-outline-dark position-relative" onClick={()=>this.onyearchange(5)}>Subject Playlists and Video lectures
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.state.y5}</span>
    </button></div>
</div>
        ) 
    }
}
export default Year ; 