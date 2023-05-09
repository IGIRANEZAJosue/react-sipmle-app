import { NavLink } from "react-router-dom"

const Category = () => {
   return (
      <div className="flex justify-center gap-6 my-8 mx-0">
         <NavLink to={"/cuisine/Italian"} className="category">
            <i className="fa-light fa-pizza-slice"></i>
            <h4>Italian</h4>
         </NavLink>
         <NavLink to={"/cuisine/American"} className="category">
            <i className="fa-light fa-burger"></i>
            <h4>American</h4>
         </NavLink>
         <NavLink to={"/cuisine/Thai"} className="category">
            <i className="fa-light fa-bowl-chopsticks-noodles"></i>
            <h4>Thai</h4>
         </NavLink>
         <NavLink to={"/cuisine/Japanese"} className="category">
            <i className="fa-light fa-chopsticks"></i>
            <h4>Japanese</h4>
         </NavLink>
      </div>
   )
}

export default Category