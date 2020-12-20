import React from 'react'
import Createpost from './Createpost'

function Edititem() {
    return (
        <div>
      <div className="modal fade" id="staticBackdropedits" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Add-Employee</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <Createpost    />
      </div>
      <div className="modal-footer">
     
      <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>

      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Edititem
