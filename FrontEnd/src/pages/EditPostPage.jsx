import { useContext, useEffect, useState } from "react"
import { API_URL } from "../utils/const.js"
import { AuthContext } from "../providers/AuthProvider.jsx"
import { useNavigate, useParams } from "react-router-dom"
import  axios  from "axios"

const EditPostPage = () => {
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)
    const { postId } = useParams();
 
    const [postData, setPostData] = useState({
        title: "",
        description: "",
        imageURL: "",
      });

      const handleOnChange = (e) => {
        /* setPostData(e.target.value);*/
        /* console.log(e.target.name, e.target.value); */
        setPostData({ [e.target.name]: e.target.value });
        
        };

       useEffect(()  => {
        const getPost = async() =>{
            try {
            const response = await axios.get(`${API_URL}/post/${postId}`, {
                    headers: {
                        Authorization: auth.token,
                    },
                  })
            /* const postDetails = await response.json(); */
                  console.log(response);
                setPostData({
                title: response.data.title,
                description: response.data.description,
                imageURL: response.data.imageURL,
            });
                    
            } catch (error) {
                
            }
        }
        getPost()
      }, [auth.token, postId])
      

    const handleSubmint = async (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            title : formData.get("title"),
            description: formData.get("description"),
            imageURL: formData.get("imageURL")
        }
        
        axios.patch(`${API_URL}/post/${postId}`, data, {
            headers: {
                "Authorization": auth.token,
                "Content-Type": "application/json"
            },
            
        })
        .then((res)=> {
            if(res.status !== 200) return alert("Error al Crear Post")})
        .then(()=>{
                navigate(`/post`)
            })
    }
    
    return (
        <div className="container d-flex flex-column justify-content-center aling-items-center mt-5">
            <h1 className="text-center">EDITAR POST</h1>
            <form className="d-flex flex-column gap-3 mt-5" onSubmit={handleSubmint} >

                <div className="form-floating">
                    <input type="text" name="title" id="title" className="form-control" placeholder="Titulo del Post" value={postData.title} onChange={handleOnChange}/>
                    <label  htmlFor="title">TITULO DEL POST</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="description" id="description" className="form-control" placeholder="Descripcion del Post" value={postData.description} onChange={handleOnChange}/>
                    <label  htmlFor="description">DESCRIPCION DEL POST</label> 
                </div>

                <div className="form-floating">
                    <input type="text" name="imageURL" id="imageURL" className="form-control" placeholder="Foto del Post" value={postData.imageURL} onChange={handleOnChange} />
                    <label  htmlFor="imageURL">FOTO DEL POST</label> 
                </div>
                <div>
                    <button className="btn btn-success">EDITAR</button>
                </div>
            </form>       
        </div>
    )
}

export {EditPostPage}