import React from 'react'
import { Link,Outlet} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"


function Users() {
  const [loading,setLoading]=useState(true);
  const [users, setUsers]=useState([]);


  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then (res=>setUsers(res.data))
    .finally(()=>setLoading(false));
  },[])
  
    return (
      <div>
        <br/>
        <br/>
        <h1>Users</h1>  
        
        <br/>
        {loading && <div>Loading...</div>} 
          
      <ul>
      {
         users.map((user)=>(
           <li key={user.id}>
             <Link to={`/users/${user.id}`}>{user.name}</Link>
             
           </li>
         )) 
      }
      </ul>  
      
      <Outlet/>
      </div>
    )
  }
  

export default Users




