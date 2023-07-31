import React from 'react'

const SignIn = () => {
  return (
    <div className="container mx-auto text-rose-500 place-content-center">
        <h2 className="text-3xl">SignIn For More Entertainment!</h2>
     <form className=" flex flex-col place-content-center">
         <div className="flex flex-col gap-5">
         <input type="text" name="SignIn" value="" placeholder="Name" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 "/>  

          <input type="text" name="SignIn" value="" placeholder="Email ID" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 "/>  
        
         <input type="text" name="password" value="" placeholder="Password" className=" max-w-sm h-10 border border-gray-400 py-1 px-2"/>

         <input type="text" name="SignIn" value="" placeholder="Confirm Password" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 "/>  
         </div>
      
         <button  className=" mt-2 w-28 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 text-2xl ">SignIn</button>
       
    </form> 

    </div>
  )
}

export default SignIn