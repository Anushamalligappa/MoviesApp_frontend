import dribble from "../img/dribbble.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import twitter from "../img/twitter.png"


const Footer = () => {
  return (
    <footer className="bg-blue-950 ">
      
     <div className="container flex flex-wrap flex-col justify-center items-center h-60 mx-96 ">
      <h2 className="text-white text-3xl font-bold mb-4 font-mono italic">Infinity Entertainment</h2>
      <div className=" flex flex-row  gap-2 ">
      
        <img src={facebook} alt="" className="w-14 h-14"/>
        <img src={dribble} alt="" className=" w-14 h-14"/>
        <img src={instagram} alt="" className="w-14 h-14"/>
        <img src={twitter} alt="" className="w-14 h-14"/>
      </div>
      
      <h3 className="text-white mt-2 ">Help   Media   Jobs   Account   GiftCards Terms&Condition   Privacy</h3>
      <h4 className="text-white mt-1">Copyright © 2023 Infinity Inc.</h4>
      
      </div>
    </footer>
  )
}

export default Footer