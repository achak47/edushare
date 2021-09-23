//This is the main route for Signin , register , Home page . If a user fills up email,password properly then only he will get reverted to the home page
import './App.css';
import React,{Component} from 'react';
import Signin from './signin.js';
import Register from './register';
import Home from './home' ;
import Add from './add' ;
import Query from './query';
const initstate = {
    route:'Signin',
    id : '' ,
    name : '' ,
    email : '' ,
    dep : '',
    year: '',
    reports: [],
    length:0
}
class App extends React.Component {
  constructor(){
    super() ;
    this.state = initstate ;
    } ;
  componentDidMount() {
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(console.log)
    .catch(err => console.log(err)) ;
  }
  loaduser = (data)=>{
    this.setState({
      name:data.Name,
      dep : data.Department,
      year: data.year,
      email: data.email,
    }) ;
    console.log(this.state.name);
    this.loadreport();
  }
  loadreport = ()=> {
    fetch('http://localhost:3001/checkreport',{
      method : 'post' ,
      headers : {'content-type' : 'application/json'} ,
      body : JSON.stringify({
       email:this.state.email
      })
    }).then(response => response.json())
    .then(data=>{
      if(data.length){
        if(this.state.length == 0){
          var length = 0 ;
          for(let i=0;i<data.length;i++)
          {
            if(data[i].check == 0){ length++ ;}
          }
          if(length>0){
        alert('You have '+length+' unhandeled report(s) . Pls check in the reports section under My Profile') ;
          }
        }
        console.log(data) ;
        this.setState({reports:data,length:data.length}) ;
      }
      else{
        this.setState({reports:[],length:0}) ;
      }
    })
    .catch(err => console.log(err)) ;
  }
  onRouteChange = (route)=>{
    this.setState({route:route}) ;
   if(route === 'Signin')
   { this.setState(initstate) ; }
  }
  render(){
    return (
    <div className="App">
     {this.state.route === 'Signin'
     ? <Signin onRouteChange={this.onRouteChange} loaduser={this.loaduser} />
     :(
      this.state.route === 'Register' ? <Register onRouteChange={this.onRouteChange} loaduser={this.loaduser} />
      :(this.state.route === 'Home' ?
       <Home onRouteChange={this.onRouteChange} dep={this.state.dep} email={this.state.email} name={this.state.name} reports={this.state.reports}
       loadreport={this.loadreport} length={this.state.length} year={this.state.year}/>
       :(this.state.route == 'query' ?  <Query  dep={this.state.dep} onRouteChange={this.onRouteChange} email={this.state.email} name={this.state.name} year={this.state.year}/>
       :< Add onRouteChange={this.onRouteChange} email={this.state.email} name={this.state.name} />))
      )
     }
    </div>
  )}
}

export default App;
