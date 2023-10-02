import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Items from './Items'

const Main = () => {
  const navigation= useNavigate()

  useEffect(()=>{
    
    if(!localStorage.getItem("token")){
      navigation("/login")
    }
  })
  return (
    <div>
    <h1 className='primary-h'>Welcome to KB-store</h1>
    <h2 className='secondary-h'>Sab Sahi Milega Yahi !</h2>
    <Items/>
    </div>
  )
}

export default Main
