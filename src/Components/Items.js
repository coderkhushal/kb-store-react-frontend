import React, { useContext, useEffect } from 'react'
import Item from './Item'
import Usercontext from '../Context/user/usercontext'
const base_url = "https://kb-store-backend-6nri.onrender.com"
const Items = () => {
    const {items,setitems} = useContext(Usercontext)

    const fetchproducts= async()=>{
        let token = localStorage.getItem("token")
        let response = await fetch(`${base_url}/kbstore/users/products`,{
            method:"GET",
            headers:
                {
                    "Content-Type": "application/json",
                    "auth-token": token
                },
            
        })
        let data= await response.json()
        if(data.success===true){
            
            setitems(data.products)
        }
  
    }
    useEffect(()=>{
        fetchproducts()
    })
  return (
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
        {items &&
            items.map((e)=>{
                return <Item image={"https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} price= {e.price} name={e.name} specifications={e.specifications} />
                 })
        }
    </div>
  )
}

export default Items
