import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useState } from "react";
import Modal from "../modal";
import Cart from "./screens/Cart";
import { useCart } from "./ContextReducer";
export function Navbar() {
  let data=useCart()
  const [cartView,setCartView]=useState(false)
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{backgroundColor:"indigo"}}>
        <div class="container-fluid">
         <Link className="navbar-brand fs-1 fst-italic" to="/" >GoFood</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto " >
              <li className="nav-item">
              <Link className="nav-link active fs-5" to="/" >Home</Link>
              </li>
               {localStorage.getItem("authToken")
               ?<Link className="nav-link active fs-5" to="/myorder" >My Orders</Link>
               :""
              }
            </ul>
            {
            (!localStorage.getItem("authToken"))
            ?
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login" >Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser" >SignUp</Link>
            </div>
            :<div> 
               <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)}}>
                My Cart
                <Badge pill bg="danger" >{data.length}</Badge>
               </div>
               {cartView?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
               <div className="btn bg-white text-danger mx-2" style={{color:"red"}} onClick={handleLogout}>
                Logout
               </div>
            </div>
            } 
            
          </div>
        </div>
      </nav>
    </div>
  );
}
