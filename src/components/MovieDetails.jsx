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
    .then((res)=>{
      console.log(res)
      navigate("/")})
    .catch((e)=>console.log(e))

  }

  return (
<div className="max-w-full flex flex-col items-center max-h-screen text-white text-bold-3xl ">
   {error && 
    <p style={{color:"red"}}>{error}</p>}
      

    
      {movie &&
      <>
      <div className="mb-20 text-3xl">
      
      <h2 className="text-violet-400 ml-32 mt-40 mb-4 text-5xl">{movie.title}</h2>
      
      <img src={movie.poster}/>

      <p className="text-violet-400">Director :  {movie.director}</p>
      <p className="text-violet-400">Year :  {movie.year}</p>
      <p className="text-violet-400 mb-4">Rating :  {movie.rating}</p>
      <div className="mb-24">
       <Link to={`/movies/${id}/update`} className="box-border bg-pink-200 text-indigo-600 rounded-md ">Update Movie</Link> 
       
      <button onClick={handleDelete} className="text-stone-800 bg-red-900 rounded-md ml-4 mt-4">Delete Movie</button>
      </div>
      </div>
      </>}
    </div>
  )
}

export default MovieDetails