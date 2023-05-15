import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import '../Styles/index.css'


const Products = ({id, image, name, price ,handleAddProduct,product}) => {
  const [quantity, setquantity] = useState(0);

  const handleProductMinus=()=>{
    if(quantity<1)
    {
      setquantity(0)
    }
    else
    {
      setquantity(quantity-1)
    }
  }


  return (
    <>
      <span className="card_container" key={id}>
          <img src={image} className="img_properties" alt="" />
        <div className="product_name">{name}</div>
        <div className="product_price">Price :${price}</div>

        <FaMinus
          onClick={handleProductMinus}
          className="minus"
          id="minus"
        />
        <input
          type="number"
          name="quantity"
          id=""
          className="quantity"
          value={quantity}
          readOnly
          onSelect={(e)=>{e.preventDefault()}}
        />
        <FaPlus onClick={() => setquantity(quantity + 1)} className="plus" />
        <div>
        <button className="Add" 
        onClick={()=> handleAddProduct(product) }>ADD TO CART</button>
        <button className="Buy">BUY NOW</button>
        </div>
      </span>
      
    </>
  );
};
export default Products;
