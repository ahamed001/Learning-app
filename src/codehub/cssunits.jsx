import "../style/units.css";
import { Link, Outlet } from "react-router-dom";

let Cssunits=()=>{
    return(

    <div className="units">
       
       <Link to={'/cssunits/cssintro'}>Intro</Link>
       <Link to={'/cssunits/grid'}>Grid</Link>
       <Link to={'/cssunits/animation'}>Animation</Link>
       <Link to={'/cssunits/flex'}>Flex</Link>
       <Link to={'/cssunits/tooltip'}>Tooltip</Link>
       <Link to={'/cssunits/quizcss'}>Quiz</Link>

       <Outlet/>
    
    </div>
    
    )
}

export default Cssunits;