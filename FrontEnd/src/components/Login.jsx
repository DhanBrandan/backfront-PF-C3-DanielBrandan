import { useContext, useRef,  } from "react"

import { AuthContext } from "../providers/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const.js";
import  axios  from "axios"

const Login = () => {

    const ref = useRef(null)

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = async (e) =>  {
        e.preventDefault();

        const formData = new FormData (e.target);
        const email = formData.get("email")
        const password = formData.get("password")

        const user = {
            email,
            password,
        }
        const req = await axios.post(`${API_URL}/user/login`, user, {
        
        headers: {
            "Content-Type": "application/json",
        },
});
    if(req.status !== 201   ) { 
        ref.current.reset()
        return alert("Error al iniciar sesion")
    }
    
    login(req.data)
  
    ref.current.reset()
    navigate('/')

    }

    return (
        <div className="d-flex flex-column m-5">

        <form 
            onSubmit={handleSubmit}
            ref={ref}
            className="text-bg-secondary m-auto p-5 rounded-5"
            >
            <h2 className="text-center">Login</h2> 
            <div className="mb-3">
                <label  className="form-label">Ingresa Tu M@il</label>
                <input type="email" className="form-control"  placeholder="Tu@Mail.com" name="email"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Ingresa tu Password</label>
                <input type="password" className="form-control"  placeholder="TuPassword" name="password"/>
            </div>
            <div className="d-flex gap-5 ">
                <button className="btn btn-primary">Login</button>
                <Link className="btn btn-primary" to="/user/register">Register</Link>
            </div>
        </form>
        </div>
    )
}

export {Login}