import { useState } from "react";
import { Link } from "react-router-dom"

export function Signup() {
    const[credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
       
       e.preventDefault();
      const response=await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            location:credentials.geolocation
        })
      })
      const json =await response.json()

      if(!json.success){
        alert("Enter valid Credentials")
      }
      else{
        alert("Account Created")
      }
   }
   const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value} )
   }
   
    return (

  <div>
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          name='name' value={credentials.name}
          onChange={onChange}
        />
        
      </div>
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

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          
          name='geolocation' value={credentials.geolocation}
          onChange={onChange}
        />
      </div>
     
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
      <Link to="/login" className="m-3 btn btn-danger" >Already a user</Link>
    </form>
  </div>
  </div>
    )
}
