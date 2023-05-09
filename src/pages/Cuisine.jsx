import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {

   const [cuisine, setCuisine] = useState([]);
   let params = useParams();
   
   const getCuisine = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=19dffa90f10e478195fd407ac7b7e23c&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };

   useEffect(() => {
      getCuisine(params.type);
      console.log(params.type);
   }, [params.type]);

   return (
      <div>
         {/*<h1 className="text-center font-semibold mb-8 text-4xl">{params.type} Cuisine</h1> */}
         <div className="grid">
            {cuisine.map((item) => {
               return(
                  <div className="card" key={item.id}>
                     <img className="w-full rounded-[1rem]" src={item.image} alt={item.title} />
                     <h4 className="text-center p-4 font-medium text-lg">{item.title}</h4>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Cuisine