import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { edited_values } from "./App";

function Createpost(props) {
	const edit = useContext(edited_values);
	const { passData, editData } = props;
	const [input, setinput] = useState({
		name: "",
		email: "",
		phoneno: "",
		position: "",
		editedValue:false
  });
//   const [editedData, seteditedData] = useState({
// 		name: "",
// 		email: "",
// 		phoneno: "",
// 		position: "",
//   });
  
	useEffect(() => {
		if(edit)
		{
			setinput(edit);	
            setinput({
				editedValue:true
			})
		}
	}, [edit]);

	
    
	const submitdata = (event) => {
		event.preventDefault();
	// 	if (edit) {
	// 		fetch(`http://localhost:4000/updateUser/${edit._id}`, {
	// 			method: "POST",
	// 			headers: { "Content-Type": "application/json" },
	// 			mode: "cors",
	// 			body: JSON.stringify({
	// 				name: input.name,
	// 				email: input.email,
	// 				phoneno: input.phoneno,
	// 				position: input.position,
	// 			}),
    //   });
    //   setinput('')
    // } 
	passData(input)
	};
	return (
		<>
			<div className="container-fluid">
				<div className="row p4">
					<div className="col">
						<form onSubmit={submitdata}>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Name</label>
								<input
									type="name"
									className="form-control"
									id="nameFormControlInput1"
									placeholder="name"
									autoComplete="off"
									name="name"
									onChange={(e) => setinput({ ...input, name: e.target.value })}
									value={input.name}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Email</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="E-mail"
									autoComplete="off"
									name="email"
									onChange={(e) =>
										setinput({ ...input, email: e.target.value })
									}
									value={input.email}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Phone-No</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Phone-No"
									autoComplete="off"
									name="phoneno"
									onChange={(e) =>
										setinput({ ...input, phoneno: e.target.value })
									}
									value={input.phoneno}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Position</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="position"
									autoComplete="off"
									name="position"
									onChange={(e) =>
										setinput({ ...input, position: e.target.value })
									}
									value={input.position}
								/>
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
		</>
	);
}

export default Createpost;
