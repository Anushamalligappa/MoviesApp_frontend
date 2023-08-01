
import { NavLink } from 'react-router-dom'

const Header = () => {

  
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 h-24">
      {/* <img src="https://unsplash.com/photos/9HGPvHThNME" alt="logo"   /> */}

      
     
      <nav className="flex justify-evenly gap-9 ">
      
        <ul className="flex flex-row  gap-9   mt-6 ">
          
          <li className="font-sans hover:font-serif text-3xl hover:text-rose-500 ">
            <NavLink to="/" >Home</NavLink>
          </li>
          
          <li className="font-sans hover:font-serif text-3xl hover:text-rose-500">
            <NavLink to="/movies/new ">Add Movie</NavLink>
          </li>
          <li  className="font-sans hover:font-serif text-3xl text-end hover:text-rose-500">
            <NavLink to="/movies/signin">Sign in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header