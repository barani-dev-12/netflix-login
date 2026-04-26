import React from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

function Login() {
    const [email,setEmail] = React.useState('')
    const [pass,setPass] = React.useState('')

    const navigate = useNavigate()

    function check(){
        var logindetails = axios.get(`https://netflix-login-7u7g.onrender.com/dashboard?email=${email}&password=${pass}`)
        logindetails.then((data)=>{
            if(data.data === true){
                navigate('/dashboard')
            }
            else{
                alert("Invalid Credentials . . .")
            }
        })
    }
    
    return (
      <div className='login-container'>
      <h1 className='login-title'>
        Login
      </h1>
      <div className='form'>
      <input className='input-box' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className='input-box' type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
      <button className='btn-submit' onClick={check}>Submit</button>
      </div>
</div>

    )
}
export default Login
