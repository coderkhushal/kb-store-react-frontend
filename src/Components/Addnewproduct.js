import React, { useState } from 'react'

const base_url ="https://kb-store-backend-6nri.onrender.com"

const Addnewproduct = (props) => {
  const token = props.token;
  const [productinfo, setproductinfo] = useState({ name: "", price: "", specifications: "" })
  const [selectedfile, setselectedfile] = useState()


  const handleonchange = (e) => {
    setproductinfo({ ...productinfo, [e.target.id]: e.target.value })
  }

  const createproduct = async (product) => {
    let response = await fetch(`${base_url}/kbstore/seller/createproduct`, {
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

  const handlefilechange=async(e)=>{
    setselectedfile(e.target.files[0])
  }
  

  const handleupload= async()=>{
    const formdata= new FormData()
    formdata.append("file",selectedfile)

    try{
      const response = await fetch(`${base_url}/kbstore/seller/upload`,{
        method:"POST",
        headers:{
          "auth-token":token
        },
        body: formdata
      })

      if(response.ok){
        console.log("file uploaded and saved to backend successfully")
      }
      else{
        console.error("file upload failed")
      }
    }catch(err){
      console.log("error uploading file",err)
    }

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
                  <label htmlFor="price" className='secondary-h'>Price(in $)</label>
                  <input onChange={handleonchange} type="text" className="form-control" id="price" />
                </div>
                <div className="form-group formback">
                  <label htmlFor="specifications" className='secondary-h'>Specifications</label>
                  <input onChange={handleonchange} type="text" className="form-control" id="specifications" />
                </div>
                <div className="modal-footer">
                </div>
              <div className="form-group formback">
                <label htmlFor="exampleFormControlFile1" className='secondary-h'>Enter Product images (Max-3)</label>
                <input type="file"  className="form-control-file" id="exampleFormControlFile1" onChange={handlefilechange} multiple/>
                <button type="button" onClick={(e) => { e.preventDefault(); createproduct(productinfo); clearform();handleupload() }} className="btn btn-primary">Submit</button>
              </div>
              </form>
          
             
            </div>
          </div>()
        </div>
      </div>
    </>
  )
}

export default Addnewproduct
