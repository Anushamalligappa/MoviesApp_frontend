import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useParams,useNavigate} from 'react-router-dom'


const MovieDetails = () => {
  const {id}=useParams();
   const navigate=useNavigate() 
  const [movie,setMovie]=useState(null)
  const [error,setError]=useState(null)

  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_SERVER}/api/movies/${id}`)
    .then((res)=>setMovie(res.data))
    .catch((e)=>setError(e.response.data.msg))
  })

  const handleDelete=()=>{
    axios
    .delete(`${import.meta.env.VITE_SERVER}/api/movies/${id}`)
    .then((res)=>navigate("/"))
    .catch((e)=>console.log(e))

  }

  return (
<div className="text-white mx-0 flex flex-col">
   {error && 
    <p style={{color:"red"}}>{error}</p>}
      

    
      {movie &&
      <>
      <div >
      
      <h2 >{movie.title}</h2>
      <p>Director:{movie.director}</p>
      <p>Year:{movie.year}</p>
      <p>Rating:{movie.rating}</p>
      <p>{movie.poster}</p>
       <Link to={`/movies/${id}/update`}>Update Movie</Link> 
      <button onClick={handleDelete}>Delete Movie</button>
      </div>
      </>}
    </div>
  )
}

export default MovieDetails