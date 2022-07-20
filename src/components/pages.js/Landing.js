import RegisterForm from "../forms.js/RegisterForm";
import LoginForm from "../forms.js/LoginForm";
import { useState } from 'react'
import Giphy from "./Giphy";

const Landing = (props)=>{
    const [hasAccount, setHasAccount] = useState(false)
    const {setUser}=props

return(
    <div>
        <h1>for Finance and Stocks</h1>
        { hasAccount === false ? (
            <div>
               <Giphy/>
        <RegisterForm setUser={setUser} />
        <p>Already have an account?{" "} 
        <span className="btn btn-primary" onClick={() => setHasAccount(true)}>Login</span>{""}
        </p>
        </div>
        ) : (
            <LoginForm setUser={setUser}/>

        )}
       </div> 
   );
};
export default Landing;