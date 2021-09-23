import React,{Component} from 'react' ;
import Qcard from './qcards.js' ;
class Qview extends Component{
    render(){
        const {ads} = this.props ;
        var adds ;
            adds = ads.map((element,index)=><Qcard name={element.name} desc={element.desc} dep={element.dep} 
            contact1={element.contact1} contact2={element.contact2} Email={this.props.email} onqchange={this.props.onqchange}
            count={element.ans} onachange={this.props.onachange} email={element.email}/>) ;
        var ans = <p className='colour'>Sorry No results match your Search</p> ;

     if(adds.length == 0)
    {
       adds = <p className='colour'>Sorry No results match your Search</p>
    }
    if(this.props.orgads.length == 0)
    {
       adds = <p className='colour'>No questions found</p>
    }
        return( 
            <div className='centerer'>
               {adds} 
            </div>
        )
    }
}
export default Qview ;