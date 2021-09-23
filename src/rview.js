import React from 'react' ;
import './index.css' ;
import firebase from './firebase' ;
import "firebase/storage";

class Rcard extends React.Component{
    onDelete = ()=>{
        if(this.props.email == this.props.Email){
          
            fetch('http://localhost:3001/deleteres' , {
                method : 'post' ,
                headers : {'content-type' : 'application/json'} ,
                body : JSON.stringify({
                  link:this.props.link
                })
              }).then(response => response.json())
                .then(data =>{
                    alert('Deleted Succesfully !');
                    let bucketName = this.props.dep+this.props.year 
                    let refr = bucketName+'/'+this.props.name
                    const storage = firebase.storage().ref(refr)
                    var fileRef = storage.child(this.props.name)
  
                     // Delete the file using the delete() method 
                     fileRef.delete().then(function () {
  
                         // File deleted successfully
                         console.log("File Deleted")
                     }).catch(function (error) {
                        // Some Error occurred
                         });                   
                      fetch('http://localhost:3001/delreport' , {
                method : 'post' ,
                headers : {'content-type' : 'application/json'} ,
                body : JSON.stringify({
                  link:this.props.link
                })
              }).then(response => response.json())
                .then( data=>{
                    this.props.loadreport();
                })
                this.props.rchange('year',this.props.year);
            })
        }
        else{
            alert('You do not have the permission to delete this , You can only delete your uploads')
        }
    }
    onReport = ()=>{
      if(this.props.email == this.props.Email){
        alert('You cannot report yourself ! If you feel that you have posted something inappropriate then u may delete it')
      }
      else{
        this.props.routefn('Report',this.props.link,this.props.email)
      }
    }
    render(){
    return (
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.name}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href={this.props.link} target='_blank'>View</a></li>
          <li><a class="dropdown-item" href="#" onClick={()=>{this.onReport()}}>Report</a></li>
          <li><a class="dropdown-item" href="#" onClick={()=>{this.onDelete()}}>Delete</a></li>
        </ul>
      </div>
    );}
  }  
  export default Rcard;