import React, { useState } from "react";
import Admin from "./Admin";

import LogInPage from "./LogInPage";


function UserAdmin(){
    let[user, setUser]=useState(null)

    
    return(
        <div >
            {user===null &&<div id="welcome"><h1>Welcome to Shopping cart</h1> <div
            style={{backgroundColor:"none",
            borderRadius:"20px", height:"400px", width:"400px ", margin:"auto", marginTop:"150px" }}>
           <div>
            
               
        <div >
            <button id="btn1" onClick={()=>{setUser("user")}}>  User</button>
            </div> <br/>
            <div>
        <button id="btn1" onClick={()=>{setUser("admin")}}>Admin</button>
        </div> 
        </div> 
        </div> 
        </div> }
        {user ==="user" && <LogInPage/>}
        {user==="admin" && <Admin/>}
        </div>
    )
}
export default UserAdmin;

