import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Usercontext from '../Context/user/usercontext'
import { useNavigate } from 'react-router-dom'
const base_url = "https://kb-store-backend-6nri.onrender.com"

const Login = () => {
    const navigation = useNavigate()
    const context = useContext(Usercontext)
    const { logininput, setlogininput } = context
    // const navigation= useNavigate()
    const [isseller, setisseller] = useState(true)

    const handleonchange = (e) => {
        console.log(logininput)
        setlogininput({ ...logininput, [e.target.id]: e.target.value })
    }

    const handlelogin = async (logininput) => {
        let response = await fetch(`${base_url}/kbstore/${isseller ? "seller" : "users"}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logininput),
        });
        let data = await response.json()

        localStorage.setItem("token", data.token)
        if (data.success && isseller===false) {
            navigation("/")
        }
        
        else if (data.success && isseller===true) {
            navigation("/sellerdashboard",{
                state:{
                    token:data.token
                }
            })
        }


    }

    return (
        <>
            <h1 className='primary-h'>Login</h1>
            <div class="mx-auto btn-group btn-group-toggle my-4" style={{margin:'auto',width:"20rem",display:"flex"}} data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" checked onClick={()=>{setisseller(true)}} /> SELLER
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2" onClick={()=>{setisseller(false)}} /> USER
                </label>
            </div>
            <div className="container">
                <form className='form'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={handleonchange} aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" minLength={0} className="form-control" onChange={handleonchange} id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handlelogin(logininput) }} >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
