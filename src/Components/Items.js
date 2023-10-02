import React, { useContext, useEffect } from 'react'
import Item from './Item'
import Usercontext from '../Context/user/usercontext'

const Items = () => {
    const {items,setitems} = useContext(Usercontext)

    const fetchproducts= async()=>{
        let token = localStorage.getItem("token")
        let response = await fetch("http://127.0.0.1:5000/kbstore/users/products",{
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
                return <Item image={"https://th.bing.com/th/id/OIP.Gdzxm_JryABOWQ7Wd64wQwHaE8?pid=ImgDet&rs=1"} price= {e.price} name={e.name} specifications={e.specifications} />
                return <Item image={"https://th.bing.com/th/id/OIP.Gdzxm_JryABOWQ7Wd64wQwHaE8?pid=ImgDet&rs=1"} price= {e.price} name={e.name} specifications={e.specifications} />
            })
        }
    </div>
  )
}

export default Items
