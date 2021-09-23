import React,{Component} from 'react' ;
import Rcard from './rview'

class Myres extends Component{
    render(){
        var linkarr = this.props.resource.map((element,index)=><div>
            ({element.folder})
            <br/>
            <Rcard name={element.file} link={element.link} reports={this.props.reports}/>
        </div>) ;
        if(linkarr.length == 0){
          linkarr = <p >U didn't Contribute any resource yet</p>
        }
        return(
            <div className='pa3'>
              <h3 style={{"text-align": "center"}}> My Resources</h3>  
            <div  className='row row-cols-3 pa3' style={{"row-gap": "1rem"}}>
                {linkarr}
            </div>
            </div>
        )
    }
}
export default Myres ;