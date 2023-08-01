import {Routes,Route} from 'react-router-dom';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails'
import UpdateMovie from './UpdateMovie';
import SignIn from './SignIn';

const Main = () => {
  return (
    <main className="bg-black height-80">
     <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movies/new" element={<NewMovie />}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="/movies/:id/update" element={<UpdateMovie/>}/>
      <Route path="/movies/signin" element={<SignIn/>} />
     
     </Routes>

    </main>
  )
}

export default Main