import React, { useEffect } from 'react'
import {BrowserRouter,NavLink,Switch,Route, useHistory}  from 'react-router-dom'
import Createpost from './Createpost'
import Homepage from './Homepage'
import './Allhome.css'
import Allblogs from './Allblogs'
function AllHome() {


  const history = useHistory()

  useEffect( ()=>{

  })
    return (
        <>
        <BrowserRouter>
        <div className="container-fluid">
            <div className="row mb5">
            <div className="col">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#" ><span style={{color:"#007bff"}}>AnonymousBlogger</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto" id='navbars'>
      <li className="nav-item">
       <NavLink to='/Home' activeClassName="navbar__link--active"  style={{ textDecoration: 'none' }}>Home </NavLink> 
      </li>
      <li className="nav-item">
       <NavLink to='/createpost' activeClassName="navbar__link--active" style={{ textDecoration: 'none' }}> writeBlog</NavLink>
      </li>
      <li className="nav-item">
       <NavLink  to='/Allblogs' activeClassName="navbar__link--active" style={{ textDecoration: 'none' }}> Blogs</NavLink>
      </li>
  
    </ul>
  </div>
</nav>
</div>
</div>
</div>



<div className="container-fluid">
    <div className="row my-5">
        <div className="col">
    <Switch>
        <Route  path='/createpost' component={Createpost}></Route>
        <Route path='/Home' component={Homepage}></Route>
        <Route path='/Allblogs'   component={Allblogs}></Route>
        
    </Switch>

    </div>
    </div>
</div>




</BrowserRouter>
        </>



    )
}

export default AllHome
