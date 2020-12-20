import React, { useEffect, useState } from "react";
import Createpost from "./Createpost";

function SendEmail(props) {

  const [emailValue , setEmailValue] = useState({
    contents:'',
    headings:'',
    email:''
  })

  useEffect(()=>{
    if(props.email)
    setEmailValue({...emailValue , email:props.email})
     
  },[props.email])
  const valueEntered = (e) =>{
   const {value ,name} = e.target
   setEmailValue({
     [name]:value
   })
   
  }
  const sendemail = (e) =>{
    e.preventDefault()
    console.log(emailValue)
  }

	return (
		<div>
			<div className="container-fluid">
				<div className="row p4">
					<div className="col">
						<form onSubmit={sendemail}>
							<div className="form-group">
								<label for="exampleFormControlInput1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={  props.email ?props.email : emailValue.email}
                  onChange={(e)=>setEmailValue({...emailValue,email:props.email})}
								></input>
							</div>

							<div className="form-group">
								<label for="formGroupExampleInput">Heading </label>
								<input
									type="text"
									className="form-control"
									id="formGroupExampleInput"
                  placeholder="Heading"
                  value={emailValue.headings}
                  onChange={(e)=>setEmailValue({...emailValue,headings:e.target.value}) } 
                  name='headings'
								></input>
							</div>
							<div className="form-group">
								<label for="exampleFormControlTextarea1">
									Example textarea
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
                  rows="3"
                  value={emailValue.contents}
                  onChange={(e)=>setEmailValue({...emailValue,contents:e.target.value}) }     
                  name='contents'
								></textarea>
							</div>
							<button
								type="button"
								className="btn btn-primary"
								style={{ marginTop: "1%" }}
								type="submit"
							>
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SendEmail;
