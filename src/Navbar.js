import React from 'react';
const Navbar =(props)=>{
return(
    <>
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/" style={{cursor:"pointer"}}>Movie</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.change} />

    </form>
  </div>
</nav>
    </>
)
}
export default Navbar;