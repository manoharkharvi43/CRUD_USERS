import React, { useEffect, useState, useMemo } from "react";
import { createContext } from "react";
import "./App.css";
import Createpost from "./Createpost";
import axios from "axios";
import SendEmail from "./SendEmail";
import { useSnackbar } from "notistack";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { CircularProgress } from "@material-ui/core";




function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const edited_values = createContext();
function App() {
  const [alldata, setalldata] = useState([]);
  const [passvalue, setpassvalue] = useState(false);
  const [ failureMessage , setFailureMessage] = useState(false)
  const [ successMessage , setSuccessMessage] = useState(false)
  const[refresh , setRefresh] = useState(false)
  const[loader , setLoader] = useState(false)
  const[deleteLoader , setDeleteLoader] = useState(false)
  const [ currentClickedIndex , setCurrentClickedIndex] = useState('')
  const [edit, setedit] = useState({
    name: "",
    email: "",
    phoneno: "",
    position: "",
    editedValue: true,
  });

  const submitdata = (input) => {
    if(input.name && input.email && input.phoneno  && input.position) {
      setLoader(true)
      return fetch("http://localhost:4000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          phoneno: input.phoneno,
          position: input.position,
        }),
      })
        .then((res) => res.json())
        .then((data) => {   setSuccessMessage(true)
          setLoader(false)
          setRefresh(!refresh)
      })
        .catch((err) => {console.log("error occured", err)
        setLoader(false)

      });
    }
    else{
      console.log('sd');
      setFailureMessage(true)
    }
  
  };

  const refreshData = () =>{
    fetch("http://localhost:4000/user")
    .then((res) => res.json())
    .then((data) => setalldata(data))
    .catch((errr) => console.log(errr));
  }
  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => setalldata(data))
      .catch((errr) => console.log(errr));
  }, [refresh]);

  function deleteitem(id) {
    setDeleteLoader(true)
    axios
      .delete(`http://localhost:4000/user/${id}`)
      .then((res) => {console.log(res)
        setDeleteLoader(false) 
        refreshData()})
      .then((err) => {console.log(err)
        setDeleteLoader(false)});
  }

  const editusers = (val) => {
    setedit({
      name: val.name,
      email: val.email,
      phoneno: val.phoneno,
      position: val.position,
      editedValue: true,
    });
  };

  return (
    <>
      <edited_values.Provider value={edit}>
        <div className="container-fluid">
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#staticBackdrop"
            id="btn"
          >
            Add-User
          </button>
          <Snackbar open={successMessage} autoHideDuration={4000} onClose={() =>{
            setSuccessMessage(false)
          }} >
        <Alert severity="success" onClose={() =>{
            setSuccessMessage(false)
          }}  >
          Successfully added 
        </Alert>
      </Snackbar>
      <Snackbar open={failureMessage} autoHideDuration={4000}  onClose={() =>{
            setFailureMessage(false)
          }} >
        <Alert severity="error" onClose={() =>{
            setFailureMessage(false)
          }} >
          Please fill all the fields
        </Alert>
      </Snackbar>
          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Add-Employee
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Createpost loader={loader} passData={(data) => submitdata(data)} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}

          {/* email */}
          <div
            className="modal fade"
            id="staticBackdropEmail"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Send Email
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <SendEmail email={edit.email} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* email */}
          <div className="container-fluid">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone-No</th>
                  <th scope="col">Position</th>
                </tr>
              </thead>
              {alldata.map((val, index) => (
                <>
                  <tbody key={index}>
                    <tr>
                      <th scope="row">{index}</th>
                      <>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phoneno}</td>
                        <td>{val.position}</td>
                      </>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#staticBackdropEmail"
                        id="btn"
                        onClick={() => editusers(val)}
                      >
                        Send Email
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {deleteitem(val._id)
                          setCurrentClickedIndex(val._id)}}
                        disabled={deleteLoader ? true : false}

                      >
                        
                        {deleteLoader && currentClickedIndex===val._id?  <CircularProgress size={20} /> : 'Delete'}
                      </button>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </edited_values.Provider>
    </>
  );
}

export default App;
