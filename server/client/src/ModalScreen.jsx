import React, { useState } from "react";

function ModalScreen(props) {

	const [showModal ,setShowModal] = useState(false)


	return (
		<div >
		{props.showModal &&	<button
				type="button"
				class="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
			>
				Launch demo modal
			</button> }
			<div
				class="modal fade "
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"

			>
				<div class="modal-dialog ">
					<div class="modal-content bg-success ">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">

							<h4>Successfully sent</h4>
						</div>
						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" class="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalScreen;
