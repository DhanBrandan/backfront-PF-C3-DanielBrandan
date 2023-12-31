import { Link } from "react-router-dom";
import { BsGithub, BsInstagram} from "react-icons/bs"


const Footer = () => {
    return(
    <footer className=" d-flex flex-wrap justify-content-between align-items-center py-1  border-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container d-flex " >
            <div className="col-md-4 d-flex align-items-center">
                <span className="text-white">Copyright © 2000-2023</span>
            </div>
            <div className="col-md-4 d-flex align-items-center" > 
                <span className="text-white">Brandan Daniel ®</span>
            </div>
            
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className=""><Link className="text-white btn btn-lg" to="https://www.instagram.com/danielitobrandan/" target="_blank"><BsInstagram /></Link></li>
                <li className=""><Link className="text-white btn btn-lg" to="https://github.com/DhanBrandan" target="_blank"><BsGithub /></Link></li>  
            </ul>

        </div> 
    </footer>

    )
}

export {Footer}