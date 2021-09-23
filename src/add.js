import React,{Component} from 'react' ;

class Add extends Component{
    constructor(props){
        super(props) ;
        this.state = {
          contact1 : '' ,
          contact2:'',
          desc : '' ,
          email : '' ,
          book : '',
          dep :'',
          image:'',
          price:''
        }
      } 
      ondescChange = (event)=>{
        this.setState({desc : event.target.value})
      } 
      onbookChange = (event)=>{
        this.setState({book : event.target.value})
      }
      onDepChange = (event)=>{
        this.setState({dep : event.target.value})
      }
      onpriceChange = (event)=>{
        this.setState({price : event.target.value})
      }
      onimageChange = (event)=>{
        this.setState({image : event.target.value})
      }
      oncontact1Change = (event)=>{
        this.setState({contact1 : event.target.value})
      }
      oncontact2Change = (event)=>{
        this.setState({contact2 : event.target.value})
      }
      onpress = ()=>{
        console.log(this.state) ;
        fetch('http://localhost:3001/adds' , {
          method : 'post' ,
          headers : {'content-type' : 'application/json'} ,
          body : JSON.stringify({
            email : this.props.email ,
            book : this.state.book ,
            desc : this.state.desc,
            dep:this.state.dep,
            year:this.state.year,
            image: this.state.image,
            contact1:this.state.contact1,
            contact2:this.state.contact2,
            price:this.state.price,
            name:this.props.name
          })
        }).then(response => response.json())
          .then(data =>{
            alert(data) ;
      })
    }
    render(){
        const { onRouteChange } = this.props ;
        return(
            <div className='pa3'>
                <button type="button" className="btn btn-danger" onClick={()=>onRouteChange('Home')}> Back to Home</button>
<div class="mb-3 pa3">
  <label for="exampleFormControlInput1" class="form-label">Book Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name of your book which you want to sell" onChange={this.onbookChange} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Image link</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="If any image of the book is available enter its link(You can simply generate the link by uploading in Drive)" onChange={this.onimageChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Price</label>
  <input class="form-control" id="exampleFormControlInput1"  placeholder="Pls enter a reasonable amount" onChange={this.onpriceChange}></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="A brief overview of the book" onChange={this.ondescChange}></textarea>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Department</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Which department it targets" onChange={this.onDepChange} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact 1</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your contact number" onChange={this.oncontact1Change} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact 2</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Alternate contact number " onChange={this.oncontact2Change} />
</div>
<input onClick={this.onpress} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Place ad" />
</div>
        )
    }
}

export default Add ;