import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/screens/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/screens/Login";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Signup } from "./components/screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import { MyOrder } from "./components/screens/MyOrder";
function App() {
  return (
    <div style={{backgroundColor:"#262629"}}>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/createuser" element={<Signup></Signup>}></Route>
          <Route path="/myOrder" element={<MyOrder></MyOrder>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
