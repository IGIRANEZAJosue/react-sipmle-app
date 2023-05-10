import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Recipe = () => {

   let params = useParams();
   const [details, setDetails] = useState({});
   const [activeTab, setActiveTab] = useState("instructions");

   const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=821d67e71f27488589077e8ea33beacf`);
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
   };

   useEffect(() => {
      fetchDetails();
   }, [params.name]);

   return (
      <div className="detailWrapper">
         <div className="min-w-[40%]">
            <h2 className="mb-6 text-xl font-semibold">{details.title}</h2>
            <img src={details.image} alt={details.title} />
         </div>
         <div className="info ml-12 w-[60%]">
            
            <button  className={activeTab === "instructions" ? "active button" : "button"} onClick={() => setActiveTab("instructions")} >Instructions</button>
            <button  className={activeTab === "ingredients" ? "active button" : "button"} onClick={() => setActiveTab("ingredients")} >Ingredients</button>
               
            {activeTab === "instructions" && (
               <div className="w-[100%] mt-8">
                  <h3 dangerouslySetInnerHTML={{__html: details.summary}} className="mb-4"></h3>
                  <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
               </div>
            )};   
               
            {activeTab === "ingredients" &&(
               <ul className="mt-8 ml-12">
                  {details.extendedIngredients.map((ingredient) => (
                     <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
               </ul>
            )}

         </div>
      </div>
   );
}

export default Recipe