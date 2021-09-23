import React,{Component} from 'react' ;
import Search from './search' ;
import Pageview from './pageview'
class Myads extends Component{
    constructor(){
        super() ;
        this.state = {
          searchfield:''
        } ;
        } ;
    onSearch = (event)=>{
            this.setState({ searchfield: event.target.value})
          }
    render(){
        const filterads = this.props.ads.filter(ads =>{
            return ads.book.toLowerCase().includes(this.state.searchfield.toLowerCase())
          }) 
        return(
            <div className='pa3'>
              { this.props.ads.length == 0 ?
               <div></div>
               :<Search searchChange={this.onSearch}/> 
              }
               <Pageview ads={filterads} orgads={this.props.ads} route={this.props.route} email={this.props.email}/>
            </div>
        )
    }
}
export default Myads ;