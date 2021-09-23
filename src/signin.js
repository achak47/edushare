import React,{Component} from 'react' ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Signin extends React.Component {
    constructor(props){
        super(props) ;
        this.state = {
          signinPassword : '' ,
          signinEmail : '',
        }
      } 
      onEmailChange = (event)=>{
        this.setState({signinEmail : event.target.value})
      } 
      onPasswordChange = (event)=>{
        this.setState({signinPassword : event.target.value})
      }
      onSignin = ()=>{
       
       fetch('http://localhost:3001/signin' , {
         method : 'post' ,
         headers : {'content-type' : 'application/json'} ,
         body : JSON.stringify({
           email : this.state.signinEmail ,
           password : this.state.signinPassword
         })
       }).then(response=>response.json())
       .then(user =>{
          if(user === 'Wrong Password , Pls re-enter your password' || user === 'You are temporarily banned for few days by the admin for either violating upload policy or report policy')
          {
            alert(user) ;
          }
          else{
            console.log(user) ;
            this.props.loaduser(user) ;
            this.props.onRouteChange('Home') ;
          }
          }) ;
      }
    render(){
        const { onRouteChange } = this.props ;
        return(
        <div className="form-signin pa5">
     <h1 className="h3 mb-4 font-weight-normal" style={{"font-family": "sans-serif", "color": "brown", "font-size": "3em"}}>Welcome Back</h1>
     <br />
     <br />
      <div className='br5 ba dark-gray b--black-10 mv8 w-100 w-50-m w-50-l mw10 shadow-5 center' style={{'margin-left':'auto'}}>
      <legend className="f2 fw6 ph0 mh0">Sign In</legend><br />
      <label for="inputEmail" className="sr-only" htmlFor="email-address"></label>
      <input onChange={this.onEmailChange} type="email" name="email-address"  id="email-address" className="form-control db fw6 lh-copy f6" placeholder="Email address" required autofocus />
      <label for="inputPassword" className="sr-only"></label>
      <input type="password" id="password" name="password" className="form-control db fw6 lh-copy f6" placeholder="Password" required onChange={this.onPasswordChange} />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-dark btn-block" type="submit" value="Sign in" onClick={this.onSignin}>Sign in</button><br />
      <button className="btn btn-outline-light ma2" type="submit" value="Sign in" onClick={()=> onRouteChange('Register')}>Register</button>
    </div>
    </div>
    );
    }
}
export default  Signin  ;
 {/*    <div className='ctr'>
          <h2>Welcome Back</h2>
          <div>
    <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
        <main className="pa4 black-80">
  <div className="measure ">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
        onChange={this.onPasswordChange} />
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in"
      onClick={this.onSignin} />
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db pointer" onClick={()=> onRouteChange('Register')}>Register</a>
    </div>
  </div>
</main>
</article>
</div>
        </div> */}