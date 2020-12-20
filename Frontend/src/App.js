import React, {  useState } from 'react';
import './App.css';
import Createpost from './Createpost'



function App() {
const [passeddata , setpasseddata] = useState([])
const [input ,setinput] = useState({
  name:"",
  email:"",
  phoneno:"",
  position:""
})






const submit = (e) =>{

  setpasseddata((prevdata) =>{
   return  [...prevdata,e]
  })
}
console.log('submitted' ,passeddata )

  return (
   <>
   <div className="container-fluid">
   
  

    {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" id='btn'>
Add-User
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <Createpost passdatas={submit} />
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
{/* modal */}

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
    </table>


 

 
</div>

   </>
  );
}
 

export default App;
