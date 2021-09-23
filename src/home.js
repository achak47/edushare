import React,{Component} from 'react' ;
import Adpage from './adpage' ;
import Myads from './myads' ;
import Myqueries from './myqueries' ;
import Querypage from './querypage' ;
import Homepage from './homebody' ;
import Year from './year.js' ;
import Myres from './myres.js';
import Myreports from './myreport' ;
import Myans from './myans' ;
class Home extends React.Component{
  constructor(){
    super() ;
    this.state = {
      route:'Home',
      ads:[],
      queries:[],
      res:[],
      ans:[]
    } ;
    } ;
    ansChange = (route)=>{
      this.setState({route:route}) ;
      fetch('http://localhost:3001/myanswer' , {
        method : 'post' ,
        headers : {'content-type' : 'application/json'} ,
        body : JSON.stringify({
         email:this.props.email
        })
      }).then(response => response.json())
        .then(data =>{
        this.setState({ans:data})
    })
    }
    profileChange = ()=>{
      this.setState({route:'myres'})
      fetch('http://localhost:3001/myres' , {
        method : 'post' ,
        headers : {'content-type' : 'application/json'} ,
        body : JSON.stringify({
          email : this.props.email ,
        })
      }).then(response => response.json())
        .then(data =>{
         this.setState({res:data}) ;
    })
    }
    routeChange = (route)=>{
      this.setState({route:route}) ;
      const headers = { 'Content-Type': 'application/json' }
      fetch('http://localhost:3001/adview', { headers })
      .then(response => response.json())
      .then(data =>{
    this.setState({ads:data}) ;
  })
    }
    queryChange = (route)=>{
      this.setState({route:route}) ;
      const headers = { 'Content-Type': 'application/json' }
      fetch('http://localhost:3001/queryview', { headers })
      .then(response => response.json())
      .then(data =>{
    this.setState({queries:data}) ;
  })
    }
  render(){
    const {onRouteChange} = this.props ;
    return(
        <div>
           <h2>Edusera</h2>
           <nav className="navbar navbar-expand-lg navbar-light" style={{'background-color': '#e3f2fd'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>this.routeChange('Home')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>onRouteChange('adds')}>Place an add</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>onRouteChange('query')}>Post a Question</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>this.routeChange('viewads')}>See adds</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>this.queryChange('queryview')}>Student Forum</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Profile
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" onClick={()=>this.routeChange('viewmyads')}>My Ads</a></li>
            <li><a className="dropdown-item" href="#"  onClick={()=>this.queryChange('myqueries')}>My Queries</a></li>
            <li><a className="dropdown-item" href="#"  onClick={()=>this.profileChange()}>My Resources</a></li>
            <li><a className="dropdown-item" href="#"  onClick={()=>this.ansChange('myans')}>My Answers</a></li>
            <li><a className="dropdown-item position-relative" href="#"  onClick={()=>this.routeChange('reports')}>Reports against me
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.props.length}</span>
    </a></li>
             <li  className="dropdown-item">
             Username : {this.props.name}
             </li>
             <li  className="dropdown-item">Email : {this.props.email}</li>
            <li><a className="dropdown-item" href="#"  onClick={()=>onRouteChange('Signin')}>Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    {
      this.state.route == 'Home'?<Homepage onrouteChange={this.routeChange}/>  
      :(this.state.route == 'viewads'?<Adpage ads={this.state.ads} route={this.state.route} email={this.props.email}/>
      :(this.state.route == 'myqueries' ? <Myqueries queries={this.state.queries} email={this.props.email} onrouteChange={this.routeChange} route={this.state.route}/>
      :(this.state.route == 'queryview' ?<Querypage queries={this.state.queries} route={this.state.route} email={this.props.email} 
      name={this.props.name} dep={this.props.dep} year={this.props.year} queryChange={this.queryChange} routeChange={this.routeChange}/>
      :(this.state.route == 'viewmyads'?<Myads ads={this.state.ads} email={this.props.email} onrouteChange={this.routeChange}/>
      :(this.state.route == 'myres'?<Myres resource={this.state.res} reports={this.props.reports}/>
      :(this.state.route == 'reports'? <Myreports reports={this.props.reports} loadreport={this.props.loadreport}/>
      :(this.state.route == 'myans'?<Myans ans={this.state.ans} email={this.props.email} routeChange={this.routeChange} />
      :<Year route={this.state.route} email={this.props.email} name={this.props.name} onrouteChange={this.routeChange} 
      reports={this.props.reports} loadreport={this.props.loadreport} />)))))))
    }
    </div>
    ) }
}
export default Home ;