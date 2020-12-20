import React ,{useState ,useRef} from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import  './Createpost.css'

function Createpost(props) {
  


const nameref = useRef(null)
const emailref = useRef(null)
const phonenoref = useRef(null)
const positionref = useRef(null)

    const [input, setinput] = useState({
        name:"",
        email:"",
        phoneno:"",
        position:""
    })


   
    const passdata = () =>{
       props.passdatas(input)
    }
    

const namekey = (e) =>{
  if ((e.key === 'Enter') || (e.key === 'down') ){
    emailref.current.focus()
  }
}
const emailkey = (e) =>{
  if ((e.key === 'Enter') || (e.key === 'down') ){
    phonenoref.current.focus()
  }
}
const phonenokey = (e) =>{
  if ((e.key === 'Enter') || (e.key === 'down') ){
   positionref.current.focus()
  }
}

    return (
        <>
       <div className="container-fluid">
  <div className="row p4">
    <div className="col">
     
    <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="name" ref={nameref} onKeyDown={namekey} className="form-control" id="nameFormControlInput1" placeholder="name" autoComplete="off"name="name" onChange={e =>setinput({...input , name:e.target.value})} value={input.name} />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" ref={emailref}  onKeyDown={emailkey} className="form-control" id="exampleFormControlInput1" placeholder="E-mail" autoComplete="off" name="email" onChange={e =>setinput({...input , email:e.target.value})} value={input.email}  />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone-No</label>
    <input type="text" ref={phonenoref}  onKeyDown={phonenokey}  className="form-control" id="exampleFormControlInput1" placeholder="Phone-No" autoComplete="off" name="phoneno"  onChange={e =>setinput({...input ,phoneno:e.target.value})} value={input.phoneno}  />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Position</label>
    <input type="text"  ref={positionref}  className="form-control" id="exampleFormControlInput1" placeholder="position" autoComplete="off" name="position"  onChange={e =>setinput({...input , position:e.target.value})} value={input.position}  />
  </div>

  <button type="button" class="btn btn-primary" style={{marginTop:"1%"}}  onClick={passdata}>submit</button>
 
 

  
</form>
    </div>
  </div>
  
</div>
        </>
    )
    }

export default Createpost
