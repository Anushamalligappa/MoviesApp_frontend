import axios from 'axios';

import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import MovieDetails from './MovieDetails';


const Movies = () => {
  const [movies,setMovies]=useState(null)
  const [searchMovie,setSearchMovie]=useState()
  console.log(searchMovie)
   
  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_SERVER}/api/movies`)
    .then((res)=>setMovies(res.data))
    .catch((e)=>console.log(e))

  },[])

  const handleSearch=(e)=>{
const keyword=e.target.value;
setSearchMovie(keyword);
const filteredMovie =movies.filter((movie)=>movie.content.toLowerCase().includes(keyword.toLowerCase()));
console.log(filteredMovie)
MovieDetails(filteredMovie)


  }




  return (
   

<div className="max-w-full  ">
     
<div className="ml-80 mr-80 text-violet-400">
<form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg> */}
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-violet-400 dark:text-violet dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search Movies" onChange={handleSearch} required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>

     
      <img src="https://images.unsplash.com/photo-1606778303039-9fc1488b1d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80 " alt="img" className="pb-10"/>
     {/* <h2 className="text-center h-5 ">Movie List</h2>  */}
     

    <ul className="  flex flex-wrap justify-center gap-10  ">
   
    { 
    movies &&
    
     movies.map((movie)=> (<li key={movie.id}   className="max-w-sm rounded overflow-hidden shadow-lg  w-[30%] mb-8">
      <img src={movie.poster} alt="poster" className="w-full h-[30vh] cursor-pointer hover:animate-bounce " />
      <div className="bg-violet-500 ">
      <Link to={ `/movies/${movie.id}`} className="card p-0 py-4">
      <div className="font-bold text-xl  text-center ">
         {movie.title}  
         </div> 
         </Link>
         </div>
      </li>
    )
    )
    }
    </ul>

    </div>
  )
}

export default Movies;