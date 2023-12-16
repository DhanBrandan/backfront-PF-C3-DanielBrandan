import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const.js";

const Register = () => {

    const ref = useRef(null)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData (e.target);
        const avatarURL = formData.get("avatarURL")
        const email = formData.get("email")
        const username = formData.get("username")
        const password = formData.get("password")

        const user = {
            avatarURL,
            email,
            username,
            password,
        }
        const req = await fetch(`${API_URL}/user/register`, {

            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
    });

        if(req.status !== 201)return alert("Error al registrar Usuario")

        ref.current.reset()
        navigate('/user/login')

    }

    return(
        <div className="d-flex flex-column m-5">
            <form 
            onSubmit={handleSubmit}
            ref={ref}
            className="text-bg-secondary m-auto p-5 rounded-5"
            >
            <h2 class= "text-center">Registrar</h2>              
            <input className="form-control m-3" type="text" placeholder="Tu Usuario" name="username"/>
            <input className="form-control m-3" type="email" placeholder="TuMail@gmail.com" name="email"/>
            <input className="form-control m-3" type="password" placeholder="Tu Contraseña" name="password"/>
            <input className="form-control m-3" type="url" placeholder="Elije Tu Avatar" name="avatarURL"/>
            <div className="d-flex gap-5 ">
                <button className="btn btn-primary" type="submit">Registrar</button>
                <Link className="btn btn-primary" to="/user/login">Login</Link>
            </div>
        </form>     
        </div>
    )
}
export {Register}