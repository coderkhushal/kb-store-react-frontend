import React, {  useState } from 'react'

const Addnewproduct = (props) => {
  const token = props.token;
  const [productinfo, setproductinfo] = useState({ name: "", price: "", specifications: "" })
  const [image, setimage]= useState()

  const handleonchange = (e) => {
    setproductinfo({ ...productinfo, [e.target.id]: e.target.value })
  }

  const createproduct = async (product) => {
    let response = await fetch(`http://127.0.0.1:5000/kbstore/seller/createproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify(product),
    })
    let data = await response.json()
    if (data.success === true) {
      setproductinfo({ name: "", price: "", specifications: "" })
      // document.getElementsByName(input).value=""
    }
  }

  const clearform = () => {
    document.getElementById("productform").reset()
  }

  const onuploadingfile=(e)=>{
    console.log(e.target.files[0])
    setimage(e.target.files[0])
  }

  // make an image functionality for seller to upload for his product
  //store the image in backend server
  //give update operations on seller products
  // display the products to user in user portal from same product collection of mongodb

  return (
    <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" id='addproductbtn'>
        Add New Product
      </button>

      <div className="modal fade bg-dark formback" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog formback" >
          <div className="modal-content formback">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "black" }}>Product Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearform}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id='productform'>

                <div className="form-group formback">
                  <label htmlFor="name" className='secondary-h'>Name</label>
                  <input onChange={handleonchange} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="form-group formback">
                  <label htmlFor="price" className='secondary-h'>Price</label>
                  <input onChange={handleonchange} type="text" className="form-control" id="price" />
                </div>
                <div className="form-group formback">
                  <label htmlFor="specifications" className='secondary-h'>Price</label>
                  <input onChange={handleonchange} type="text" className="form-control" id="specifications" />
                </div>
                <div className="modal-footer">
                </div>
                <button type="button" onClick={(e) => { e.preventDefault(); createproduct(productinfo); clearform() }} className="btn btn-primary">Submit</button>
              </form>


              <form method="post" action="/image" encType='multipart/form-data'>
              <div className="form-group formback">
                  <label htmlFor="exampleFormControlFile1" className='secondary-h'>Enter Product images (Max-3)</label>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={onuploadingfile} />
                </div>
                <button className='btn btn-primary' type="submit" onClick={(e)=>{e.preventDefault();}}>Upload Image</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addnewproduct
