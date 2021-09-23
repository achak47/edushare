import React,{Component} from 'react' ;
import Rcardz from './rcard' ;
class Myreports extends Component{
    render(){
        var reportarr = this.props.reports.map((element,index)=><Rcardz desc={element.desc} file={element.file}
        folder={element.folder} link={element.link} loadreport={this.props.loadreport} checkin={element.check}/>) ;
        if(reportarr.length == 0){
           reportarr = <p>There are no reports against you</p>
        }
        return(
            <div>
              {reportarr}
            </div>
        )
    }
}
export default Myreports ;