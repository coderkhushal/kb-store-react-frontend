

const base_url = "https://kb-store-backend-6nri.onrender.com"
const Selleproducts = (props) => {
  // useEffect(()=>{console.log(props.token)})
  const deleteproduct = async (e) => {
    console.log("clicked")
    let response = await fetch(`${base_url}/kbstore/seller/deleteproduct/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": props.token
      },
      // body: JSON.stringify(logininput),
    });
    let data = await response.json()
    if(data.success===true){
      console.log("deleted successfully")
    }

  }
  return (
    <div>

      <div className="card sellerproduct" >
        <img src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG" className="sellerproductimg" alt="" />
        <div className="card-body">
          <h5 className="card-title secondary-h">{props.product_name}</h5>
          <h5>Price: {props.price}</h5>
          <h5>Specifications: {props.specifications}</h5>
          <i className="fa-solid fa-pen-to-square" style={{ color: "bisque" }}></i>
          <i className="fa-solid fa-trash mx-2" onClick={deleteproduct}></i>
        </div>
      </div>

    </div>
  )
}

export default Selleproducts
