import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
  })
  const {username,email,password,confirmpassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
     axios.post("http://localhost:8000/user",data)
    if (password === confirmpassword){
      console.log(data);
    }
    else{
      console.log("passwords are not matching")
    }
  }
  
  return (
    <div>
      <center>
        <form onSubmit={e => submitHandler(e)}>
              <h2>Sign Up</h2>
          <input type="text" name="username" value={username} onChange={changeHandler} /><br/>
          <input type="email" name="email" value={email} onChange={changeHandler} /><br/>
          <input type="password" name="password" value={password} onChange={changeHandler} /><br/>
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} /><br/>
          <input type="submit" name="submit"/><br/>
        </form>
      </center>
    </div>
  )
}

export default App;
