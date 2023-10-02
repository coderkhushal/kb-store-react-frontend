import React, { useEffect } from 'react'
import {useLocation } from 'react-router-dom'

const Productdetails = () => {
    const location = useLocation()

    // (async()=>{
    //     //fetch data of product with the help of product id
    //     //store data of product in various states and display them
    // })()
  return (
    <div>
      <h1 className='primary-h'>Product Details</h1>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

  <div className="carousel-inner " id='productimage' style={{width:"40rem",border:"2px solid white" }}>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
    <div className="carousel-item active">
      <img src={location.state.image} className="d-block w-100 px-2 py-2" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={location.state.image} className="d-block w-100 px-2 py-2" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={location.state.image} className="d-block w-100 px-2 py-2" alt="..."/>
    </div>
    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
  </div>


</div>

    
      <div className="container" id='productdesc' >
        <div className="fields">Name: {location.state.name}</div>
        <div className="fields">Price:  {location.state.price}</div>
        <div className="fields">Specifications:  {location.state.specifications}</div>
        <div className="fields">Rating:</div>
      <button className='btn btn-primary fields'>Buy Now</button>
      </div>
    </div>
  )
}

export default Productdetails
