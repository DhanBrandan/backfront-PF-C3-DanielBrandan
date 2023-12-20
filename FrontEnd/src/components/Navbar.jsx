
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider.jsx"

const Navbar = () => {
    const {logout ,auth} = useContext(AuthContext)
  
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
<div className="container">
  
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className={({isActive}) => {
                return isActive? "nav-link active" :"nav-link "
                }}  aria-current="page" to="/">HOME</NavLink>
            </li>
        <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/post">POST</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={`nav-link ${auth? "d-none": "d-block"}`}  aria-current="page" to="/user/register">REGISTER</NavLink>
        </li>
      </ul>
    </div>

    <button 
        onClick={auth? logout : ()=> false }
        className={`btn ${auth? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} `}
        type="button">{auth? "LOGOUT" : <NavLink className="nav-link " aria-current="page" to="/user/login">LOGIN</NavLink>}
    </button>
        
</div>
</nav>
    )
}

export {Navbar}