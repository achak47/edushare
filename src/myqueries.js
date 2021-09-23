import React,{Component} from 'react' ;
import Pcardz from './pcardz.js' ;
import Allans from './allans' ;

class Myqueries extends Component{
    constructor(){
        super() ;
        this.state = {
          root:'question',
          id:'',
          desc:'',
          ans:[]
        } ;
        } ;
    componentDidMount(){
        alert('If your doubt is solved then you may delete your question')
    }
    onAchange = (route,ans,desc)=>{
        this.setState({root:route,ans:ans,desc:desc})
        console.log(this.state.desc)
      }
      onrchange = (route)=>{
        this.setState({root:route})
     }
    render(){
        const {email} = this.props ;
        let myadds = this.props.queries.filter(e => e.email === email) ;
        var adds = myadds.map((element,index)=><Pcardz email={this.props.email} onrouteChange={this.props.onrouteChange} type={ element.type}
         desc={element.desc} dep={element.dep}  contact1={element.contact1} contact2={element.contact2} onAchange={this.onAchange}/>) ;
    if(adds.length == 0)
    {
       adds = <p className='colour'> You have no queries to see</p>
    }
        return(
            <div className='pa5'>
                { this.state.root == 'question'?
                <div>
               {adds}
               </div>
               :<Allans ans={this.state.ans} onrchange={this.onrchange} desc={this.state.desc} email={this.props.email} onrouteChange={this.props.onrouteChange}/>
                }
            </div>
        )
    }
}
export default Myqueries ;