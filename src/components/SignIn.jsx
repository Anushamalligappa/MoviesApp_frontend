import React from 'react'

const SignIn = () => {
  return (
    <div className=" max-w-full flex flex-col items-center max-h-screen ml-16">
        <h2 className="text-3xl text-pink-700 mt-96">SignIn For More Entertainment!</h2>
     <form className=" flex flex-col place-content-center mt-3.5 w-96">
         <div className="flex flex-col gap-5 ">
         <input type="text" name="SignIn" value="" placeholder="Name" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md" required/>  

          <input type="text" name="SignIn" value="" placeholder="Email ID" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md" required/>  
        
         <input type="text" name="password" value="" placeholder="Password" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md" required/>

         <input type="text" name="SignIn" value="" placeholder="Confirm Password" className=" max-w-sm h-10 border border-gray-400 py-1 px-2 rounded-md" required/>  
         </div>
      
         <button  className=" mt-2 w-28 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 text-2xl rounded-lg ml-24 mb-80">SignIn</button>
       
    </form> 

    </div>
  )
}

export default SignIn