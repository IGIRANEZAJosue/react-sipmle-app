import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Popular = () => {

   const [popular, setPopular] = useState([]);

   useEffect(() => {
      getPopular();
   }, [])

   
   const getPopular = async () => {
      const check = localStorage.getItem("popular");

      if (check) {
         setPopular(JSON.parse(check));
         
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=821d67e71f27488589077e8ea33beacf&number=9`
         );
         const data = await api.json();

         localStorage.setItem("popular", JSON.stringify(data.recipes));
         setPopular(data.recipes);
      }   
   };

   return (
      <div>
         <div className="my-16">
            <h3 className="text-2xl font-bold my-4">Popular Picks</h3>
            <Splide options={{
               perPage: 4,
               arrows: false,
               pagination:false,
               drag: "free",
               gap: "2rem",
            }}>
               {popular.map((recipe) => {
                  return(
                     <SplideSlide key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id}>
                           <div className="card min-h-[15rem] rounded-[1rem] overflow-hidden relative" >
                              <p className="absolute z-10 left-1/2 bottom-0 -translate-x-1/2 translate-y-0 text-white w-[100%] text-center font-medium text-[1rem] h-[40%] flex justify-center items-center">{recipe.title}</p>
                              <img className="rounded-[1rem] absolute left-0 w-full h-full object-cover" src={recipe.image} alt={recipe.title} />
                              <div className="gradient"></div>
                           </div>
                        </Link>
                     </SplideSlide> 
                  )
               })}
            </Splide>
         </div>  
      </div>
    )
}

export default Popular
