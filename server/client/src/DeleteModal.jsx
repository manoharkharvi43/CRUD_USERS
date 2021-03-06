import React from 'react'

function DeleteModal(props) {


    const passdelete = () =>{
        props.passdeleted(true)
     
    }
    return (
        <>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Do you want to delete it permanently?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
        <button type="button" class="btn btn-primary" onClick={() =>passdelete()}>Yes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default DeleteModal
