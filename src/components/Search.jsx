import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {

   const [input, setInput] = useState("");
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/"+input);
   }

   return (
      <form onSubmit={submitHandler} className=" form my-2 lg:mx-[8rem] ">
         <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e) => setInput(e.target.value)} className="searchInput w-full" type="text" value={input} />
         </div>
      </form>
   )
}

export default Search;