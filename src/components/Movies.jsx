import axios from 'axios';

import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'


const Movies = () => {
  const [movies,setMovies]=useState(null)
   console.log(movies)

  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_SERVER}/api/movies`)
    .then((res)=>setMovies(res.data))
    .catch((e)=>console.log(e))

  },[])


  return (
    <div >
      <img src="https://images.unsplash.com/photo-1688504407820-2582d050f1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80  " alt="img" />
     {/* <h2 className="text-center h-5 ">Movie List</h2>  */}

    <ul className="  flex flex-wrap justify-center  ">
    { 
    movies &&
    
     movies.map((movie)=> (<li key={movie.id} className=" mx-5">
      <img src="{movie.poster}" alt="poster" className="text-center" />
      <Link to={ `/movies/${movie.id}`} className="card "> {movie.title} by {movie.director}</Link>
      </li>
    )
    )
    }
    </ul>

    </div>
  )
}

export default Movies