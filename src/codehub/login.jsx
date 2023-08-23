import { Outlet } from "react-router-dom";


let Login=()=>{

    const signup = () => {
        window.location.href="http://localhost:3000/signup"; 
      };

    return(
        <div className="loginpage">
        
        <form>
        <h1>Log in</h1>
            <div className="label">
            <p className="email1"><b>Email</b></p>
            <p>Need an account ? <span onClick={signup}>signup</span></p>
            
            </div>
            <input type="text" />

            <p><b>Password</b></p>
            <input type="password" /><br/>

            <button>Log in</button>



        </form>

        <Outlet/>
        </div>
    )
}
export default Login;