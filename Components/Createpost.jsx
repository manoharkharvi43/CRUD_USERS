import React ,{useState} from 'react'
import  './Createpost.css'

function Createpost() {

   

    const [input, setinput] = useState({
        name:"",
        email:"",
        title:"",
        content:""
    })

   const [allinput, setallinput] = useState({
    name:"",
    email:"",
    title:"",
    content:""
})

   
    // const datas = (e) =>{
    //    const val = e.target.value;
    //    setinput({
    //        ...datas,
    //        [e.target.name]:val
    //    })
      
    // }
    const postblog = (e)=>{
 e.preventDefault();
      setallinput({
       name:input.name,
       email:input.email,
       title:input.title,
       content:input.content,
      })
    }

  

    return (
        <>
       <div className="container-fluid">
  <div className="row p4">
    <div className="col">
     
    <form onSubmit={postblog}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="name" className="form-control" id="nameFormControlInput1" placeholder="name" autoComplete="off"name="name" onChange={e =>setinput({...input , name:e.target.value})} value={input.name} />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail" autoComplete="off" name="email" onChange={e =>setinput({...input , email:e.target.value})} value={input.email}  />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" autoComplete="off" name="title"  onChange={e =>setinput({...input , title:e.target.value})} value={input.title}  />
  </div>

 
  <div className="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comment' name="content"  onChange={e =>setinput({...input , content:e.target.value})} value={input.content}  ></textarea>
  </div>

  <button className="btn btn-outline-primary"  type='submit'>Post</button>
</form>
    </div>
  </div>
  {}
</div>
        </>
    )
}

export default Createpost
