import { Carousel } from "bootstrap";
import { Link} from "react-router-dom";

const HomePage = () => {

    return(

        <div className="container d-flex flex-column  gap-4 justify-content-center mt-3">
            
            <h1 className="textocentrado"> ¡BIENVENIDOS AL MUNDO DE LOS VIAJES! </h1>

            <div className="container d-flex flex-column  gap-4 justify-content-center mt-3">
                <img className="imagen-redondeada"src="./imagenes/Home.jpg" alt="" />
            </div>

            <h1 className="textocentrado"> VIAJA VIVE SUEÑA </h1>
        </div>

    );
};

export {HomePage}
