import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const searched = () => {

   const [searchedRecipes, setSearchedRecipes] = useState([]);
   let params = useParams();

   const getSearched = async (name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d16ca04474df45c59d0b32ffd9684dc5&query=${name}`);
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
   };

   useEffect(() => {
      getSearched(params.search);
   }, [params.search]);

   return (
      <div>
         {/*<h1 className="text-center font-semibold mb-8 text-4xl">{params.search}</h1> */}
         <div className="grid">
            {searchedRecipes.map((item) => {
               return(      
                  <div className="card" key={item.id}>
                     <Link to={"/recipe/" + item.id}>
                        <img className="w-full rounded-[1rem]" src={item.image} alt={item.title} />
                        <h4 className="text-center p-4 font-medium text-lg">{item.title}</h4>
                     </Link>
                  </div>                 
               )
            })}
         </div>
      </div>
   )
}

export default searched