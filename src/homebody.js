import React,{Component} from 'react' ;
import Eventpage from './eventpage' ;
class Homepage extends Component{
    render(){
        return(
            <div className='pa3'>
                <h3>Free Online Resources</h3>
                <div className='container pa4'>
<div className='row row-cols-4' style={{"row-gap": "1rem"}}>
<div className='col'><button type="button" className="btn btn-outline-warning" onClick={()=>this.props.onrouteChange('CSE')}>CSE & IT</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('EE')}>Electrical and Instrumentation</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('ME')}>Mechanical and Production</button></div>
<div className='col'><button type="button" className="btn btn-outline-dark" onClick={()=>this.props.onrouteChange('ETCE')}>Electronics and Telecommunication</button></div>
<div className='col'><button type="button" className="btn btn-outline-warning" onClick={()=>this.props.onrouteChange('Chemical')}>Chemical and Metallurgy</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('CE')}>Civil and Construction</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('BT')}>Biotectchnology & Biochemestry</button></div>
<div className='col'><button type="button" className="btn btn-outline-dark" onClick={()=>this.props.onrouteChange('FTBE')}>Food and Pharmacetical</button></div>
<div className='col'><button type="button" className="btn btn-outline-warning" onClick={()=>this.props.onrouteChange('PE')}>Power and Printing</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('Science')}>Science</button></div>
<div className='col'><button type="button" className="btn btn-outline-light" onClick={()=>this.props.onrouteChange('Arts')}>Arts</button></div>
<div className='col'><button type="button" className="btn btn-outline-dark" onClick={()=>this.props.onrouteChange('Arch')}>Architecture</button></div>
</div>
</div>
<br/>
<br/>
<h3>Top Placements/Internships/Webinar News</h3>
<Eventpage />
</div>
        )
    }
}

export default Homepage ;