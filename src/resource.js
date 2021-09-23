import React,{Component} from 'react' ;
import './index.css';
import firebase from './firebase' ;
import "firebase/storage";
import Rcard from './rview';
import Report from './report' ;
class Resources extends Component{
   constructor(props){
       super(props);
       this.state={
           filesURL:'',
           route:'',
           link:'',
           reportemail:'',
           videoname:'',
           files:[]

       }
   }
    routefn = (val,link,email)=>{
      this.setState({route:val,link:link,reportemail:email})
      alert('If you feel anything is inappropriate with the file , then only report it . If you report it unnecessarily then you might be banned from reporting for some days !')
    }
    handlechange = (files)=>{
     let flag = 1 ;
      this.props.links.forEach(element =>{
        if(element.file == files[0].name){
          flag = 0 ;
        }
      })
    if(flag){
      if(files[0] in this.props.links){
        alert('File already exists in the folder') ;
      } 
      else{
      this.setState({
            files: files,
            route:'uploading'
        })
        const file = files[0] ;
        let bucketName = this.props.dep+this.props.year 
        let refr = bucketName+'/'+file.name
        const storageRef = firebase.storage().ref(refr)
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(()=>{
            fileRef.getDownloadURL().then((res)=>{
                console.log(res)
                const URL = res ;
                fetch('http://localhost:3001/update' , {
                    method : 'post' ,
                    headers : {'content-type' : 'application/json'} ,
                    body : JSON.stringify({
                      email : this.props.email ,
                      url: URL,
                      folder:bucketName,
                      file:file.name
                    })
                  }).then(response => response.json())
                    .then(data =>{
                      alert('Uploaded Succesfully') ;
                     this.props.rchange('year',this.props.year);
                })
            })
       })
     }
   }
    else{
      alert('This pdf already exists')
    }
  }
    onupload=(route)=>{
      this.setState({route:route}) ;
    }
    onvideochange=(event)=>{
      this.setState({videoname:event.target.value})
    }
    onlinkchange=(event)=>{
      this.setState({link:event.target.value})
    }







    uploadVideo=()=>{
      let flag = 1 ;
      this.props.links.forEach(element =>{
        if(element.file == this.state.videoname){
          flag = 0 ;
        }
      })
    if(flag){
      let f = 1 ;
      this.props.links.forEach(element =>{
        if(element.link == this.state.link){
          f = 0 ;
        }
      })
      if(f){
        let bucketName = this.props.dep+this.props.year 
                fetch('http://localhost:3001/update' , {
                    method : 'post' ,
                    headers : {'content-type' : 'application/json'} ,
                    body : JSON.stringify({
                      email : this.props.email ,
                      url: this.state.link,
                      folder:bucketName,
                      file:this.state.videoname
                    })
                  }).then(response => response.json())
                    .then(data =>{
                      alert('Uploaded Succesfully') ;
                     this.props.rchange('year',this.props.year);
                })
              }
     else{
      alert('Same link has been uploaded')
     }
   }
    else{
      alert('A playlist with the same name exists')
    }
    }
    render(){
      const {links} = this.props ;
      var linkarr = links.map((element,index)=><Rcard name={element.file} link={element.link} email={element.email} Email={this.props.email}
      rchange={this.props.rchange} routefn={this.routefn} reports={this.props.reports} loadreport={this.props.loadreport}
      dep={this.props.dep} year={this.props.year}/>) ;
      if(linkarr.length == 0){
        linkarr = <p style={{'color':'white'}}>Sorry No resources are uploaded yet , Be the First one to contribute</p>
      }
        return(
          <div>
          { this.state.route == 'Report'?
            <Report onUpload={this.onupload} Email={this.state.reportemail} name={this.props.name} email={this.props.email} link={this.state.link}/>
          :
           <div>
              <p>Home / {this.props.dep} / UG{this.props.year}</p>
              <button className='btn btn-danger' onClick={()=>this.props.rchange('year',this.props.year)}> Back </button>
              <br />
              <br />
               <div className='row row-cols-3 center' style={{"row-gap": "1rem"}}>
             {linkarr}
             </div>
             <div>
             {this.props.year == 5?(
             this.state.route == 'video'?<div style={{'width':'20%','padding':'2%','float':'right'}}>
                <input onChange={this.onvideochange} type="email" name="email-address"  id="email-address" className="form-control db fw6 lh-copy f6" placeholder="Playlist Name" required autofocus />
                <br />
                <input onChange={this.onlinkchange} type="email" name="email-address"  id="email-address" className="form-control db fw6 lh-copy f6" placeholder="Enter the link" required autofocus />
                <br/>
                <button onClick={()=>this.uploadVideo()}> Post </button>
                <p style={{'color':'red'}}>If you post any inappropriate video/playlist link and you are reported then you will be banned forever from this app </p>
             </div>
             :<div className='center'>
              <button className="file-upload" onClick={()=>this.onupload('video')}>
                 </button>
             </div>):
             (this.state.route == 'uploading'? <div>
               <div class="loader" id='centrer'></div>
               <div className='hor'>Uploading...</div>
               </div>:(
                 this.state.route=='upload'?
                 <div className='placer'>
                 <input type="file" onChange={(e)=>{this.handlechange(e.target.files)}} />
                 <button type='button' onClick={()=>this.onupload('')} className="btn btn-outline-danger">Cancel Upload</button>
                 </div>
                 :
                 <button class="file-upload" onClick={()=>this.onupload('upload')}>
                 </button>
                  )
             )}
                 </div>
            </div>
            }
              </div>
        )
    }
}
export default Resources ;