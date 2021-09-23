import React,{Component} from 'react' ;
import Searchz from './searchz' ;
import Qview from './qview';
import Anspost from './anspost';
import Allans from './allans' ;
class Querypage extends Component{
    constructor(){
        super() ;
        this.state = {
          searchfield:'',
          root:'question',
          id:'',
          count:0,
          desc:'',
          email:'',
          ans:[]
        } ;
        } ;
    onSearch = (event)=>{
            this.setState({ searchfield: event.target.value})
          }
    onqchange =(route,id,desc,email)=>{
            this.setState({root:route,id:id,desc:desc,email:email})
          }
    onrchange = (route)=>{
       this.setState({root:route})
    }
    onachange = (route,ans,desc)=>{
      this.setState({root:route,ans:ans,desc:desc})
      console.log(this.state.desc)
    }
    render(){
        const filterqueries = this.props.queries.filter(ads =>{
            return ads.desc.toLowerCase().includes(this.state.searchfield.toLowerCase())
          }) 
        return(
          <div>
            { this.state.root == 'question'?
            <div classname='pa3'>
              { this.props.queries.length == 0 ?
               <div></div>
               :<Searchz searchChange={this.onSearch}/> 
              }
               <Qview ads={filterqueries} orgads={this.props.queries} route={this.props.route} email={this.props.email}
               onqchange={this.onqchange} onachange={this.onachange}/>
            </div>
            :(this.state.root == 'answer'?<Anspost name={this.props.name} dep={this.props.dep} year={this.props.year} id={this.state.id} 
            onrchange={this.onrchange} count={this.state.count} routeChange={this.props.routeChange} desc={this.state.desc} Email={this.state.email} email={this.props.email} />
            :<div>
              <Allans ans={this.state.ans} onrchange={this.onrchange} desc={this.state.desc} email={this.props.email} routeChange={this.props.routeChange}/>
            </div>)
    }
            </div>
        )
    }
}
export default Querypage ;