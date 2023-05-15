import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {

   const [cuisine, setCuisine] = useState([]);
   let params = useParams();
   
   const getCuisine = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=821d67e71f27488589077e8ea33beacf&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
   };

   useEffect(() => {
      getCuisine(params.type);
   }, [params.type]);

   return (
      <div>
         {/*<h1 className="text-center font-semibold mb-8 text-4xl">{params.type} Cuisine</h1> */}
         <motion.div 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
         className="grid">
            {cuisine.map((item) => {
               return(   
                  <div className="card" key={item.id}>
                     <Link to={"/recipe/" + item.id}>
                        <img className="w-full rounded-[1rem]" src={item.image} alt={item.title} />
                        <h4 className="text-center p-4 font-medium text-lg">{item.title}</h4>
                     </Link>
                  </div>          
               )
            })}
         </motion.div>
      </div>
   )
}

export default Cuisine