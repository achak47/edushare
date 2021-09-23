import React,{Component} from 'react' ;
import Acard from './acard.js' ;
import './index.css'
class Allans extends Component{
    render(){
        const {ans} = this.props ;
        var adds ;
            adds = ans.map((element,index)=><Acard name={element.author} desc={element.content} dep={element.dep} index={index}
            email={this.props.email} Email={element.email} id={element.id} routeChange={this.props.onrouteChange} ques={this.props.desc} />) ;

     if(adds.length == 0)
    {
       adds = <p className='colour'>No one Answered yet , Be the first one to answer this</p>
    }
    console.log(this.props.desc)
        return( 
            <div className='pa3 center' style={{'max-width':'50%', 'padding':'2%'}}>
                <button type="button" classNameName="btn btn-danger " onClick={()=>this.props.onrchange('question')}> Back</button>
              <br />
              <br />
              <b>Question : {this.props.desc}</b>
              <br />
              <br />
               {adds} 
            </div>
        )
    }
}
export default Allans ;