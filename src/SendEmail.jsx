import React, { useEffect, useState } from "react";
import Createpost from "./Createpost";
import transporter from "../src/Mailconfig";
import {FiLoader} from 'react-icons/fi'
function SendEmail(props) {
	const [emailValue, setEmailValue] = useState({
		contents: "",
		headings: "",
		email: "",
	});
	const [loading , setloading] = useState(false)

	useEffect(() => {
		if (props.email) setEmailValue({ ...emailValue, email: props.email });
	}, [props.email]);

const resetAll = () =>{
	setEmailValue({
		contents: "",
		headings: "",
		email: "",
	})
} 
	

	const sendemail = (e) => {
		setloading(true)
		e.preventDefault();
		fetch("http://localhost:4000/emailservice", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				mode: "cors",
				body: JSON.stringify({
					email: emailValue.email,
					contents: emailValue.contents,
					headings: emailValue.headings,
				}),
			})
				.then((res) => res.json())
				.then((data) => console.log(data) , setloading(false) )
				.catch((err) => console.log('error occured' , err),setloading(false))
				resetAll()
	};

	return (
		<div>
			<div className="container-fluid">
				 
				<div className="row p4">
					<div className="col">
						<form onSubmit={(e)=>sendemail(e)}>
							<div className="form-group">
								<label for="exampleFormControlInput1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
									value={props.email ? props.email : emailValue.email}
									onChange={(e) =>
										setEmailValue({ ...emailValue, email: props.email })
									}
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
									onChange={(e) =>
										setEmailValue({ ...emailValue, headings: e.target.value })
									}
									name="headings"
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
									onChange={(e) =>
										setEmailValue({ ...emailValue, contents: e.target.value })
									}
									name="contents"
								></textarea>
							</div>
							<button
								type="button"
								className="btn btn-primary"
								style={{ marginTop: "1%" }}
								type="submit"
							>
								{ loading ? 	<FiLoader color='black' size={25} /> :'Submit' }
							</button>
						
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SendEmail;
