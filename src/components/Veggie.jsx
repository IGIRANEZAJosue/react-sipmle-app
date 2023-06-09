import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Veggie = () => {

   const [veggie, setVeggie] = useState([]);

   useEffect(() => {
      getVeggie();
   }, [])

   
   const getVeggie = async () => {
      const check = localStorage.getItem("veggie");

      if (check) {
         setVeggie(JSON.parse(check));
         
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=19dffa90f10e478195fd407ac7b7e23c&number=9&tag=vegetarian`
         );
         const data = await api.json();

         localStorage.setItem("veggie", JSON.stringify(data.recipes));
         setVeggie(data.recipes);
      }   
   };

   return (
      <div>
         <div className="my-16">
            <h3 className="text-2xl font-bold my-4">Our Vegetarian Picks</h3>
            <Splide options={{
               perPage: 3,
               breakpoints: {
                  480: {
                     perPage: 1,
                     snap: true
                  },
                  640: {
                     perPage: 2,
                     snap: true                        
                  }
               },
               arrows: false,
               pagination: true,
               drag: "free",
               gap: "2rem",
            }}>
               {veggie.map((recipe) => {
                  return(
                     <SplideSlide key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id}>
                           <div className="card min-h-[12rem] rounded-[1rem] overflow-hidden relative" >
                              <p className="absolute z-10 left-1/2 bottom-0 -translate-x-1/2 translate-y-0 text-white w-[100%] text-center font-semibold text-[1rem] h-[40%] flex justify-center items-center">{recipe.title}</p>
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

export default Veggie
