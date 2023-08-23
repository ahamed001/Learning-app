import { Outlet } from "react-router-dom";


let Signup=()=>{

    const login = () => {
        window.location.href="http://localhost:3000/login"; 
      };

    return(
        <div className="signuppage">
        
        <form>
        <h1>Sign up</h1>

            <div className="label">
            <p className="email2"><b>Email</b></p>
            <p>Already have an account ?<span onClick={login}>login</span></p>
            </div>
            <input type="text" />

            <p><b>Password</b></p>
            <input type="password" /><br/>

            <button>Sign up</button>



        </form>
        <Outlet/>
        </div>
    )
}
export default Signup;