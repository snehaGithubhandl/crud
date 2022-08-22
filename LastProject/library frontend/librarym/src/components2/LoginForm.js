import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
function LoginForm()
{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    let data={email,password};
  const handleChange  = (event) =>{
    event.preventDefault();
    fetch("http://localhost:8080/all",{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(data)
           }).then(res=>res.json())
           .then((result)=>{
             console.log(result)
             if(result.type==="admin")
            {
             console.log("is here");
             localStorage.setItem("UserInfo",JSON.stringify(result))
              navigate('/AdminProTable')
           }
             if(result.type==="user"){
              console.log("is here");
              localStorage.setItem("UserInfo",JSON.stringify(result))
              navigate('/UserProTable')
             }
          if(result===null){alert("not matching")}
                })
        }
    return(
        <div>
            <h1>User Login</h1>
            <form>
                <label>
                    Email:
                </label><br></br>
                <input type='email' onChange={(e)=>{setEmail(e.target.value)}}  /><br></br><br></br>
                <label>
                    Password:
                </label><br></br>
                <input type='password' onChange={(e)=>{setPassword(e.target.value)}} /><br></br><br></br>
                <input type='submit' onClick={handleChange} value='Login' /><br></br>
                <a href="/register">Create a new account!</a>
            </form>
        </div>
    )
}
export default LoginForm;