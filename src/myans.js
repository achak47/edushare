import React,{Component} from 'react' ;
import Mcard from './mcard.js' ;
class Myans extends Component{
    render(){
        const {ans} = this.props ;
        var adds ;
            adds = ans.map((element,index)=><Mcard name={element.author} desc={element.content} dep={element.dep} index={index}
            email={this.props.email} Email={element.email} id={element.id} routeChange={this.props.routeChange} />) ;

        return( 
           <div>
            {
                adds.length == 0 ? <h3 className='colour center pa5' >You do not have any current answers</h3>
            :<div className='cen'>
              {adds}
            </div>
            }
            </div>
        )
    }
}
export default Myans ;