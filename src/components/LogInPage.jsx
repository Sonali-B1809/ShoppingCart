import React, { useState } from 'react'
import App from '../App'

const Login=() =>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let [login,setLogin]=useState(null)

    const [allEntry, setAllEntry]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault();

        const newEntry = {username: username, password: password};

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
    }
  return (
      <>
      {login===null && <div>
    <div className='border'>
       <form action='' onSubmit={submitForm}>
       <div className='login-form'>
    
           <label htmlFor='email'></label>
           <input type="text" name=" username" placeholder='username' id="user" autoComplete='off'
            value={username} onChange={(e)=>setUsername(e.target.value)}/>
      
       <br/>
      
           <label htmlFor='password'></label>
           <input type="password" name="password"  placeholder='password' id="password"  autoComplete='off' value={password} 
           onChange={(e)=>setPassword(e.target.value)}/>
       <br></br>
       </div>
       <button type='submit' onClick={()=>{setLogin("login")}}>Login</button><br></br>
       <a id='forgetpassword' href='https://login.salesforce.com/secur/forgotpassword.jsp?locale=in&lqs=locale%3Din' target={"_blank"}>Forgot Password?</a>
       </form>
       </div>  
       <div>

        {
            allEntry.map((el)=>{
                return (
                    <div className='showdataStyles'>
                        <p>{el.username}</p>
                        <p>{el.password}</p>
                        </div>
                )

            })
        }
       </div>
       </div>}
       {login==="login" && <App/>}
    </>
  )
}

export default Login;