import React,{Component} from 'react' ;
import Cardz from './cardz.js' ;

class Myads extends Component{
    render(){
        const {email} = this.props ;
        let myadds = this.props.ads.filter(e => e.email === email) ;
        var adds = myadds.map((element,index)=><Cardz email={this.props.email} onrouteChange={this.props.onrouteChange} book={ element.book} price={element.price}
         desc={element.desc} dep={element.dep} image={element.image} contact1={element.contact1} contact2={element.contact2} />) ;
    if(adds.length == 0)
    {
       adds = <p className='colour'>Sorry No adds to see</p>
    }
        console.log(myadds) ;
        return(
            <div>
               {adds}
            </div>
        )
    }
}
export default Myads ;