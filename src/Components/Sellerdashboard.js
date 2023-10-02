import React, {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Selleproducts from './Selleproducts'
import Addnewproduct from './Addnewproduct'
// http://127.0.0.1:5000
const base_url = "https://kb-store-backend-6nri.onrender.com"
const Sellerdashboard=()=>{
  const location = useLocation()
  const token = location.state.token
  const [products,setproducts]= useState([])
  
  const fetchproducts = async() => {
    
    let response = await fetch(`${base_url}/kbstore/seller/myproducts`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "auth-token":token
      },
      // body: JSON.stringify(logininput),
  });
    let data= await response.json()
    if(data.success===true){
      setproducts(data.products) 
    }

  }
  useEffect(() => {
    // fetch seller's products
    fetchproducts()
  })
  return (
    <>

      <div className="primary-h">Seller Dashboard</div>
      <Addnewproduct token = {token}/>
      <h1 className="secondary-h">Your products</h1>
      {!products && <h1 className='secondary-h'>No Products</h1>}
      <div className='sellerproducts'>
        {products.map((e)=>{
          return <Selleproducts token={token} id={e._id} key={e._id} price= {e.price} product_name={e.name} specifications= {e.specifications}/> 
        })}
      </div>

    </>
  )
      }

export default Sellerdashboard
