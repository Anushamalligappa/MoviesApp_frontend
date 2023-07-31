
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
    <div className="text-pink-700">
      <h2>UpdateMovie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
          <input type= "text" name="title" value={movie?.title } onChange={handleChange} required/>

          <label htmlFor="director">Director</label>
          <input type="text" name="director" value={movie.director} onChange={handleChange} required/>

          <label htmlFor="year">Year</label>
          <input type="text" name="year" value={movie.year}onChange={handleChange} required/>

          <label htmlFor="rating">Rating</label>
          <input type="text" name="rating" value={movie.rating} onChange={handleChange} required/>

          <label htmlFor="poster">Poster</label>
          <input type="text" name="poster" value={movie.poster} onChange={handleChange} required/>

          <button>Update Movie</button>

      </form>
      
      </div>
  )
}

export default UpdateMovie