import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
    const navigation= useNavigate()
    const showdetails=(productid)=>{
        navigation("/details", {
            state: {
                id: productid,
                image:props.image,
                name:props.name,
                price:props.price,
                specifications:props.specifications,

            },
        })
    }
    return (
        <div>
            <div className="card mx-3 my-4" style={{width: "20rem",height:"25rem",border:"2px solid white",background:"black",overflowY:"auto"}}>
                <img id="cardimg" src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div style={{fontSize:"x-large",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <p className="card-text mx-3">{props.name}</p>
                    <p className="card-text mx-3">${props.price}</p>
                
                    <button className="btn btn-primary mb-3" onClick={()=>{showdetails()}}>check details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
