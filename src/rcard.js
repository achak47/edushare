import React,{Component} from 'react' ;
import firebase from './firebase' ;
import "firebase/storage";

class Rcardz extends Component{
    onDelete = ()=>{
            fetch('http://localhost:3001/deleteres' , {
                method : 'post' ,
                headers : {'content-type' : 'application/json'} ,
                body : JSON.stringify({
                  link:this.props.link
                })
              }).then(response => response.json())
                .then(data =>{
                  let refr = this.props.folder+'/'+this.props.file
                  const storage = firebase.storage().ref(refr)
                  var fileRef = storage.child(this.props.file)
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
                    alert('Deleted Succesfully !')
                }
                )
            }) 
    }
    onOK = ()=>{
        fetch('http://localhost:3001/checkin' , {
                method : 'post' ,
                headers : {'content-type' : 'application/json'} ,
                body : JSON.stringify({
                  link:this.props.link
                })
              }).then(response => response.json())
              .then(data=>{
                  alert('Your Response is recorded , The admin will review this and delete the report against you if your file really does not violate our policy')
                  this.props.loadreport();
              })      
    }
    render(){
        return(
            <div className='tc bg-light-green dib br3 pa3 ma2 bw-2 shadow-5'>
              <p><b>Complain</b> :{this.props.desc}</p>
              <p><b>Folder</b> : {this.props.folder}</p>
              <p><b>File</b> : {this.props.file}</p>
              <p>If you think your file is all right and does not violate our policy then you may just
                  click on 'OK' but if your upload is inappropriate then Delete your file by clicking on the Delete button .
              </p>
              {
                  this.props.checkin==0? <div>
                      <button onClick={()=>{this.onDelete()}}>Delete</button>
                      <button onClick={()=>{this.onOK()}}>Ok</button>
                      </div>
                  :<p>The admin will review the file and take steps if necessary .</p>
              }
            </div>
        )
    }
}
export default Rcardz ;