import React from 'react' ;
import './index.css' ;
const Card = (props)=> {
    return (
<div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
<img src={props.image} className="card-img-top" alt="Image Loading..."></img>
<div>
  <h5>{props.book}</h5>
  <h3><b> Rs {props.price}</b></h3>
  <p>{props.dep}</p>
  <p>{props.desc}</p>
  <p>Contact Number : {props.contact1}</p>
  <p>Seller : {props.name}</p>
  <br></br>
  <button type="button" className='btn btn-primary'>Reply</button>
</div>
</div> 
    );
  }  
  export default Card;
  {/*  <div className="card col" style={{"width": "18rem"}}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{props.book}</h5>
        <h3 className="card-text"><b> Rs {props.price}</b></h3>
        <p className="card-text">{props.dep}</p>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">Contact Number : {props.contact1}</p>
        <p className="card-text">Seller : {props.name}</p>
      </div>
    </div>    */}