import React, { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function RegistrationForm()
{
const navigate= useNavigate();
  const [uid, setUid]=useState({});
  const [name,setName]=useState({});
  const [email,setEmail]=useState({});
  const [dateOfBirth,setDateOfBirth]=useState({});
  const [password,setPassword]=useState({});

   const [number,setNumber]=React.useState()
   useEffect(()=> {
    fetch("http://localhost:8080/count")
    .then(res=>res.json())
    .then((result)=>{
      setNumber(result)
      setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
      console.log(number)
    })
  },[number])
    const handleSubmit = (event) => {
      console.log(uid)
      let data={uid,name,email,dateOfBirth,password,type:"user"};
        event.preventDefault();
         alert ('registration successful')
        fetch("http://localhost:8080/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      }).then(() => {
        setNumber(number+1)
       setUid(()=> `UN-${(((number+1)+1000)+"").substring(1)}` )
       console.log(number)
        console.log("added")
       navigate("/")
      })
    }
  return (
    <div className="App">
     <div>
        <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                </label>
                <input type='text' name="name" onChange={(e)=>{setName(e.target.value)}} required /><br></br>
                <label>
                    Email:
                </label>
                <input type='email' name="email" onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>
                <label>Date Of Birth:</label>
                <input type='date' name="dateOfBirth" onChange={(e)=>{setDateOfBirth(e.target.value)}} required></input><br></br>
                <label>
                  Password:
                </label>
                <input type='password' name="password" onChange={(e)=>{setPassword(e.target.value)}} required/><br></br><br></br>
                <input type='submit' onClick={handleSubmit} />
                <br />
                <a href="/">Already have an account!</a>
            </form>
        </div>
</div>
  );
  }
export default RegistrationForm;