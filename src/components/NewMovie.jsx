import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const NewMovie = () => {

  const [title,setTitle]=useState('')
  const [director,setDirector]=useState('')
  const [year,setYear]=useState('')
  const [rating,setRating]=useState('')
  const [poster,setPoster]=useState('')

  const navigate =useNavigate();

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(title)
    axios
  .post(`${import.meta.env.VITE_SERVER}/api/movies`, {title,director,year,rating,poster})
  .then((res)=>{console.log(res.data)
  navigate('/')})
  .catch((e)=>console.log(e))

  }
  

  


  return (
    <div className="max-w-full flex flex-col items-center max-h-screen bg-indigo-900">
      
      <h2 className="mb-4 text-3xl text-blue-200 mt-80">Add New Movie</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-80 py-1 px-2 text-xl text-violet-500 mb-10 ">
        <label htmlFor="">Title</label>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} required className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md"/>
        <label htmlFor="">Director</label>
        <input type="text" name="director" value={director} onChange={e=>setDirector(e.target.value)} required className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md"/>
        <label htmlFor="year">Year</label>
        <input type="text" name="year" value={year} onChange={e=>setYear(e.target.value)} required className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md"/>
        <label htmlFor="rating">Rating</label>
        <input type="text" name="rating" value={rating} onChange={e=>setRating(e.target.value)} required className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md"/>
        <label htmlFor="poster">Poster</label>
        <input type="text" name="poster" value={poster} onChange={e=>setPoster(e.target.value)} required className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md"/>

        <button className="mt-2 w-28 bg-gradient-to-r from-green-400 to-blue-500 hover:from-violet-500 hover:to-green-500 py-3 text-2xl text-black rounded-lg mb-80 mt-4">NewMovie</button>
      </form>


    </div>
  )
}

export default NewMovie