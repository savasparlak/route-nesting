import axios from 'axios';
import  { useEffect, useState } from 'react'
import {Link,useParams} from "react-router-dom"


function User() {
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState({});
  
  const {id}=useParams();    

    useEffect(()=>{
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=>setUser(res.data))
      .finally(()=>setLoading(false));
    },[id]);

  return (
    <div>
      <br/>
      <br/>
       <h1> User Details</h1>
       <h2>User id :{id}</h2> 
       <br/>
       {loading && <div>Loading...</div>} 
       {!loading && <div> <code>{JSON.stringify(user)}</code></div>} 

       <br/>
       <br/>
       {}
       <div style={{display: "flex",justifyContent:"space-around"} } > 
       <Link to={`/users/${parseInt(id)-1}`}>Previous User ({parseInt(id)-1})</Link>
       <Link to={`/users/${parseInt(id)+1}`}>Next User ({parseInt(id)+1})</Link>
       </div>
      
       <br/>
       <br/>
       
        
       
    </div>
  )
}

export default User