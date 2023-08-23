import { Link, Outlet } from "react-router-dom";
import "../style/units.css";

 let Htmlunits=()=>{
    return(
    
    <div className="units">
      
        <Link to={'intro'}> Intro </Link>
        <Link to={'forms'}>Forms</Link>
        <Link to={'tables'}>Tables</Link>
        <Link to={'graphics'}>Graphics</Link>
        <Link to={'lists'}>Lists</Link>
        <Link to={'quizhtml'}>Quiz</Link>


        <Outlet/>
      
    </div>


    
    )
}

export default Htmlunits;