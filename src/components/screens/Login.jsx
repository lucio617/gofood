import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Login(){
    let navigate=useNavigate()
    const[credentials,setCredentials]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
       
       e.preventDefault();
      const response=await fetch("http://localhost:5000/api/loginuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            
            email:credentials.email,
            password:credentials.password
            
        })
      })
      const json =await response.json()

      if(!json.success){
        alert("Enter valid Credentials")
      }
      if(json.success){
        localStorage.setItem('userEmail',credentials.email)
        localStorage.setItem("authToken",json.authToken);
        navigate("/");

      }
   }
   const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value} )
   }
   
    return(
        <div>
    <div className="container">
    <form onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
         
          name='email' value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
     
          name='password' value={credentials.password}
          onChange={onChange}
        />
      </div>

      
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
      <Link to="/createuser" className="m-3 btn btn-danger" >I am a new user</Link>
    </form>
  </div>
  </div>
    )
}