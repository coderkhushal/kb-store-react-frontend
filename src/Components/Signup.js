import React, { useContext, useState } from 'react'
import Usercontext from '../Context/user/usercontext'
import { useNavigate } from 'react-router-dom'

const base_url= "https://kb-store-backend-6nri.onrender.com"
const Signup = () => {
    const navigate= useNavigate()
    const context = useContext(Usercontext)
    const { signupinput, setsignupinput } = context
    const [isseller, setisseller] = useState(true)
    const handleonchange = (e) => {
        setsignupinput({ ...signupinput, [e.target.id]: e.target.value })

    }
    const handlesignup = async (forminfo) => {

        let response = await fetch(`${base_url}/kbstore/${isseller ? "seller" : "users"}/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(forminfo)
        })
        let data = await response.json()

        localStorage.setItem("token",data.token)
        if (data.success){
            navigate("/")
        }
    }
        const handleonclick = (e) => {
            e.preventDefault();
            handlesignup(signupinput)
        }
      

        return (
                <>
                    <h1 className='primary-h'>Signup</h1>
                <div class="mx-auto btn-group btn-group-toggle my-4" style={{margin:'auto',width:"20rem",display:"flex"}} data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" checked onClick={()=>{setisseller(true)}} /> SELLER
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" id="option2" onClick={()=>{setisseller(false)}} /> USER
                </label>
            </div>
            <div>
                    <div className="container">
                        <form className='form'>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" minLength={2} onChange={handleonchange} className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" onChange={handleonchange} className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" maxLength={10} minLength={10} onChange={handleonchange} className="form-control" id="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" minLength={5} onChange={handleonchange} className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="addresss">Address</label>
                                <input type="text" minLength={2} onChange={handleonchange} className="form-control" id="address" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleonclick}>Submit</button>
                        </form>
                    </div>
            </div>
                </>
        )
    }

    export default Signup
