import { useState } from "react"
import { Link } from "react-router-dom"



const Navbar = () => {

   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(!nav);
   };

   return (
      <nav className="mt-8 mb-12 flex justify-between items-center max-w-[]1240px] mx-auto">
         <div className="logo">
            <Link className="flex items-center gap-4 z-40" to={"/"}>
               <i className="fa-regular fa-fork-knife text-4xl"></i>
               <h1 className="font-bold text-2xl">MyRecipe.eat</h1>
            </Link>
         </div>

         <div className="hidden md:flex ">
            <Link to={"/"} className="p-4" >
               <p>Home</p>
            </Link>

            <Link to={"/"} className="p-4" >
               <p>Services</p>
            </Link>

            <Link to={"/"} className="p-4" >
               <p>About Us</p>
            </Link>

            <Link to={"/"} className="p-4" >
               <p>Contact us</p>
            </Link>
         </div>

         <div onClick={handleNav} className="block md:hidden duration-500">
            { nav? <i class="text-[24px] fa-solid fa-xmark"></i> : <i class=" text-[24px] fa-solid fa-bars"></i> }
         </div>


         <div className={nav ? " md:hidden fixed left-0 top-0 h-full border-r border-r-gray-700 bg-[#313131] text-white z-20 ease-in-out duration-500" : "fixed left-[-100%] md:hidden"}>
            
            <div className="logo ml-8 mr-6 mt-8">
               <Link className="flex items-center gap-4 z-40" to={"/"}>
                  <i className="fa-regular fa-fork-knife text-4xl"></i>
                  <h1 className="font-bold text-2xl">MyRecipe.eat</h1>
               </Link>
            </div>
            
            <div className="pt-4">
               <div className="border-b border-gray-300 hover:bg-gray-300/20 duration-150 ease-in">
                  <Link to={"/"} className="p-4" >
                     <p className=" ml-8">Home</p>
                  </Link>
               </div>
               <div className="border-b border-gray-300 hover:bg-gray-300/20 duration-150 ease-in">
                  <Link to={"/"} className="p-4" >
                     <p className=" ml-8">Services</p>
                  </Link>
               </div>
               <div className="border-b border-gray-300 hover:bg-gray-300/20 duration-150 ease-in">
                  <Link to={"/"} className="p-4" >
                     <p className=" ml-8">About Us</p>
                  </Link>
               </div>
               <div className="border-b border-gray-300 hover:bg-gray-300/20 duration-150 ease-in">
                  <Link to={"/"} className="p-4" >
                     <p className=" ml-8">Contact</p>
                  </Link>
               </div>

            </div>
         </div>
   
      </nav>
   )
}

export default Navbar