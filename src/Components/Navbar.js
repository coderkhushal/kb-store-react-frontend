import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigation = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ fontSize: "x-large" }}>
        <Link className="navbar-brand" to="/" style={{ fontSize: "x-large" }}>KB-Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <div className="dropdown-menu bg-dark text-light" style={{ fontSize: "x-large" }}>
                <Link className="dropdown-item  text-light" to="/">Action</Link>
                <Link className="dropdown-item text-light" to="/">Another action</Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item text-light" to="/">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? <div>
            <Link className='btn btn-info mx-2' to="/login">Login</Link>
            <Link className='btn btn-info mx-2' to="/signup">Signup</Link>
          </div> : <div><button className='btn btn-info ' onClick={() => { localStorage.removeItem("token"); navigation("/login") }}>Logout</button></div>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
