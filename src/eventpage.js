import React,{Component} from 'react' ;

class Eventpage extends Component{
  render(){
      return(
              <div className="row row-cols-1 row-cols-md-2 g-4 pa4" >
  <div className="col">
    <div className="card">
      <img src={'https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVkJTIwdGFsa3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Event 1</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={'https://media.istockphoto.com/photos/data-scientists-male-programmer-using-laptop-analyzing-and-developing-picture-id1295900106?b=1&k=20&m=1295900106&s=170667a&w=0&h=kQ2UWilU4Bild5aP03CaF65gMbSI-chG--7dd2oS8GM='} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Event 2</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={'https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Event 3</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={'https://media.istockphoto.com/photos/code-programming-for-website-editors-view-picture-id1290492381?b=1&k=20&m=1290492381&s=170667a&w=0&h=NQSXJKhncCP1GLzDkD8KPZsCOh1wldDj5RZbPVJztxQ='} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Event 4</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
      )
  }
}

export default Eventpage ;