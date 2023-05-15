import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Recipe = () => {

   let params = useParams();
   const [details, setDetails] = useState({});
   const [activeTab, setActiveTab] = useState("instructions");

   const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=821d67e71f27488589077e8ea33beacf `);
      const detailData = await data.json();
      setDetails(detailData);
   };

   useEffect(() => {
      fetchDetails();
   }, [params.name]);

   return (
      <div className="detailWrapper flex flex-col lg:flex-row gap-8 -mt-2">
         <div className="min-w-[40%]">
            <h2 className="mb-6 text-xl font-semibold capitalize">{details.title}</h2>
            <img src={details.image} alt={details.title} className="rounded-lg" />
         </div>
         <div className="info lg:ml-12 w-full lg:w-[60%] lg:mt-12">
            
            <div className=" w-full flex gap-8 justify-between md:justify-start">
               <button  className={activeTab === "instructions" ? "active button" : "button"} onClick={() => setActiveTab("instructions")} >Instructions</button>
               <button  className={activeTab === "ingredients" ? "active button" : "button"} onClick={() => setActiveTab("ingredients")} >Ingredients</button>
            </div>
               
            {activeTab === "instructions" && (
               <div className="w-[100%] mt-8">
                  <h3 dangerouslySetInnerHTML={{__html: details.summary}} className="mb-4"></h3>
                  <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
               </div>
            )};   
               
            {activeTab === "ingredients" &&(
               <ul className="mt-8 ml-6">
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