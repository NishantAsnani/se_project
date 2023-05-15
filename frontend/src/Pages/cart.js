import React from "react";
import "../Styles/cart.css";
import '../Styles/index.css'
import { useState } from "react";



const Cart = ({cartItems}) => {
  console.log(cartItems)
  const [quantity,setquantity]=useState(0)

  const TotalPrice=cartItems.reduce((price,item)=>price+ (item.price),0)
  const handlePayment=()=>{
    alert("Your order has been placed sucessfully!!!")
  }
return (
    <>


{cartItems.length===0&&<div>The cart is empty</div>}

<section className='card_alignment'>

    {cartItems.map((item)=>{
      return(
        
        <div className="card" 
        style={{width:"18rem",marginLeft:"10px"}} 
        key={item.id}>
        <img src={item.image} className="card-img-top image_properties" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Product Id: {item.id}</h5>
          <h5 className="card-title">Name: {item.name}</h5>
          <h5 className="card-title">Price: ${item.price}</h5>
          <button  className="btn btn-primary w-full" 
          onClick={item.quantity+=1}>BUY NOW</button>

<div className='bill'>
    <div>
      Total Items:{item.quantity}
    </div>

    <div>
      Total Cost:{TotalPrice  }
    </div>
    <button className="Checkout btn btn-primary" onClick={handlePayment}>Checkout</button>

    </div>
        </div>
      </div>
      
      )
               
    })}
    
    
    </section>
                
    </>
  );
};



export default Cart
