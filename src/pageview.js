import React,{Component} from 'react' ;
import Card from './card.js' ;
import Qcard from './qcards.js' ;
class Pageview extends Component{
    render(){
        const {ads} = this.props ;
        var adds ;
        if(this.props.route == 'queryview'){
            adds = ads.map((element,index)=><Qcard type={element.type} name={element.name} desc={element.desc} dep={element.dep} 
            contact1={element.contact1} contact2={element.contact2} email={this.props.email} />) ;
         }
        else{
            adds = ads.map((element,index)=><Card book={ element.book} name={element.name} price={element.price} desc={element.desc} dep={element.dep} image={element.image}
            contact1={element.contact1} contact2={element.contact2} email={this.props.email} />) ;}   
    
     if(adds.length == 0)
    {
       adds = <p className='colour'>Sorry No results match your Search</p>
    }
    if(this.props.orgads.length == 0)
    {
       adds = <p className='colour'>No results found</p>
    }
        return(  
            <div className='pa4 tc'>
               {adds} 
            </div>
        )
    }
}
export default Pageview ;