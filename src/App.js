import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,NavLink
} from "react-router-dom";

import Users from "./components/Users";
import User from "./components/User";   
import Home from "./components/Home";
import About from "./components/About";


export default function App() {  
 
  return (
    <Router>           
        <nav style={{height:"50px",width:"100%", backgroundColor:"#ffbf80", borderBottom:"1px solid black"}}>
          <ul style={{paddingTop:"15px"}} >
            <li style={{display:"inline-block",listStyleType:"none", marginLeft:"10px"}}>
              <NavLink style={({isActive})=>({color: isActive ? "black":"white"})} to="/">Home</NavLink>
            </li>
            <li style={{display:"inline-block",listStyleType:"none", marginLeft:"10px"}}>
              <NavLink style={({isActive})=>({color: isActive ? "black":"white"})} to="/about">About</NavLink>
            </li>
            <li style={{display:"inline-block",listStyleType:"none", marginLeft:"10px"}}>
              <NavLink style={({isActive})=>({color: isActive ? "black":"white"})} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        
        <br/>
               
        <Routes>
        
          <Route   path="/" element={<Home/>}/>             
          <Route   path="/about" element={<About/>}/>                  
          <Route   path="/users" element={<Users/>}>             
          <Route path=":id" element={<User />} />
                     
          </Route>         
           
        </Routes>
    
    </Router>
  );
};



