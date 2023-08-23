
import '../style/codehub.css';
import { FaTerminal } from "react-icons/fa";
import { Link } from 'react-router-dom';

let Navbar=()=>{
    const logo = () => {
        window.location.href="http://localhost:3000/"; 
      };
    
    return(

        <div className="nav">
             <FaTerminal className="logo" onClick={logo}/>
            <div className="navleft">
        
        <Link to={'htmlunits'}> <h1> HTML </h1>  </Link> 
        <Link to={'cssunits'}> <h1> CSS </h1> </Link> 
        
        </div>

        <div className="navright">
        
        <Link to={'signup'} className='signup'> Signup  </Link> 
        <Link to={'login'} className='login'> Login </Link> 

        </div>
        </div>

       

    )
}

export default Navbar;