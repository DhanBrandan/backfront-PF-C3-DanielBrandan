import { useContext, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";
import { Post } from "../components/Post.jsx";
import { API_URL } from "../utils/const.js";
import  axios  from "axios"

const PostPage = () => {

    const [ postList , setPostList ] = useState([])
    const {auth} = useContext(AuthContext)
    const [filter , setFilter ] = useState([])
    const [search , setShearch] = useState("")
    const getPostList = () =>{

            axios.get(`${API_URL}/post`)
            .then((res)=> setPostList(res.data))

    }
    useEffect (() => { 
        getPostList()
    },[])

    useEffect (()=>{
        /* console.log(postList); */
        const filtrar = postList.filter((post)=>{
            return post.title.toLowerCase().includes(search.toLowerCase().trim())
        })
        setFilter(filtrar)
    },[postList,search])
    
    return (

    <div className="container d-flex flex-column gap-4 justify-content-center mt-3">
        <h1 className="text-center">INGRESA UN POST DE TU VIAJE</h1>

        <div className="d-flex flex-row gap-4">
                <Link className="btn btn-success" to="/post/newpost">POST</Link>
                <input type="search" name="" id="" placeholder="BUSCAR" className="form-control"
                onChange={ (e) => setShearch(e.target.value)}
                value={search}
                />
        </div>
        <div>
            {
                filter.map((post) => {
                    return(
                        <Post
                        key={post._id}
                        title={post.title}
                        imageURL={post.imageURL}
                        description={post.description}
                        createdAt={post.createdAt}
                        autor={post.autor.username}
                        avatar={post.autor.avatarURL}
                        postId={post._id}
                        comments={post.comments}
                        autorId ={post.autor._id}
                        refresh= {getPostList}
                        />
                    )
                }) 
            }
        </div>        
    </div>
)
}

export {PostPage}
