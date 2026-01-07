import {Link, Route} from "react-router-dom";
import TodoList from "./TodoList.jsx";
import Board from "./Board.jsx";

function Navbar() {
   return (
       <nav style={{display:"flex" ,gap:20}}>
           {/*השמות של הנתבים חייבים להיות זהים לשמות הנבים בrouts בnavbar איפה שיש BrowserRouter בreturn של app שזה איפה שמאפשרים את הניתוב*/}
         <Link to={"/"}>Home Page </Link>
         <Link to={"/productList"}>products</Link>
         <Link to={"/cart"}>cart</Link>
         <Link to={"/register"}>Register</Link>

       </nav>
   )
}

export default Navbar;