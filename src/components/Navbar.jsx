import { Link } from "react-router-dom"



const Navbar = () => {
   return (
      <nav className=" mt-8 mb-12 flex justify-between items-center">
         <div className="logo">
            <Link className="flex items-center gap-4" to={"/"}>
               <i className="fa-regular fa-fork-knife text-4xl"></i>
               <h1 className="font-bold text-2xl">MyRecipe.eat</h1>
            </Link>
         </div>

         <div className="font-medium text-md flex items-center gap-8">
            <Link to={"/"} className="hidden md:flex items-center gap-4" >
               <p>Home</p>
            </Link>

            <Link to={"/"} className="hidden md:flex items-center gap-4" >
               <p>About Us</p>
            </Link>

            <Link to={"/"} className="hidden md:flex items-center gap-4" >
               <p>Contact us</p>
            </Link>

            

         </div>  
         
      </nav>
   )
}

export default Navbar