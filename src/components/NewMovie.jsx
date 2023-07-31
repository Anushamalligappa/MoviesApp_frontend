import {useState} from 'react';
import axios from 'axios';

const NewMovie = () => {

  const [title,setTitle]=useState('')
  const [director,setDirector]=useState('')
  const [year,setYear]=useState('')
  const [rating,setRating]=useState('')
  const [poster,setPoster]=useState('')

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(title)
    axios
  .post(`${import.meta.env.VITE_SERVER}/api/movies`, {title,director,year,rating,poster})
  .then((res)=>console.log(res.data))
  .catch((e)=>console.log(e))

  }
  

  


  return (
    <div className="max-w-full flex flex-col">
      <h2>NewMovie</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-24">
        <label htmlFor="">Title</label>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} required/>
        <label htmlFor="">Director</label>
        <input type="text" name="director" value={director} onChange={e=>setDirector(e.target.value)} required/>
        <label htmlFor="year">Year</label>
        <input type="text" name="year" value={year} onChange={e=>setYear(e.target.value)} required/>
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating" value={rating} onChange={e=>setRating(e.target.value)} required/>
        <label htmlFor="poster">Poster</label>
        <input type="text" name="poster" value={poster} onChange={e=>setPoster(e.target.value)} required/>

        <button>NewMovie</button>
      </form>


    </div>
  )
}

export default NewMovie