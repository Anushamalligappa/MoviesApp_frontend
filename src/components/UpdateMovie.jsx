
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';


const UpdateMovie = () => {
  const  navigate=useNavigate();
const {id}=useParams();
const [movie,setMovie]=useState('')
useEffect(()=>{
  console.log(id)
  axios
  .get(`${import.meta.env.VITE_SERVER}/api/movies/${id}`)
  .then((res)=>{setMovie(res.data)
  console.log(res.data)
})
  
  .catch((e)=>console.log(e))

},[])


const handleSubmit=(e)=>{
  e.preventDefault();
axios
.put(`${import.meta.env.VITE_SERVER}/api/movies/${id}`,movie)
.then((res)=>{console.log(res.data);
navigate("/")})
.catch((e)=>console.log(e))


}

const handleChange=(e)=>{
const {name,value}=e.target;
setMovie({...movie,[name]:value})

}


  return (
    <div className="container text-pink-700 flex flex-col justify-center items-center ml-80 ">
      
      <form onSubmit={handleSubmit} className="flex flex-col w-60 mb-96 items-center justify-center text-3xl mt-60">
        <label htmlFor="title">Title</label>
          <input type= "text" name="title" value={movie?.title } onChange={handleChange} className=" w-80 h-10 border border-gray-400 py-1 px-2 rounded-md"required/>

          <label htmlFor="director">Director</label>
          <input type="text" name="director" value={movie.director} onChange={handleChange} className=" w-80 h-10 border border-gray-400 py-1 px-2 rounded-md" required/>

          <label htmlFor="year">Year</label>
          <input type="text" name="year" value={movie.year}onChange={handleChange} className=" w-80 h-10 border border-gray-400 py-1 px-2 rounded-md"required/>

          <label htmlFor="rating">Rating</label>
          <input type="text" name="rating" value={movie.rating} onChange={handleChange} className=" w-80 h-10 border border-gray-400 py-1 px-2 rounded-md"required/>

          <label htmlFor="poster">Poster</label>
          <input type="text" name="poster" value={movie.poster} onChange={handleChange} className=" w-80 h-10 border border-gray-400 py-1 px-2 rounded-md"required/>

          <button className="bg-yellow">Update Movie</button>

      </form>
      
      </div>
  )
}

export default UpdateMovie