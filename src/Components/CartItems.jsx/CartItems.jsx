import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export default function CartItems() {

const {all_products , cartItem  , removeFromCart} = useContext(ShopContext)


  return (
    <div className='cartItems'>
      <div className="cartItems_format_main">
           <p className="heddin_img">Products</p>
           <p className="cartitems_format_title">Title</p>
           <p>Price</p>
           <p  >Quantity</p>
           <p className="heddin_img">Total</p>
          <p>Remove</p>
      </div>
              <hr />

{/* {all_products.map((ele) => {

if(cartItem[ele.id] > 0) {
  return <div>
  
  <div className="cartitems_format">
  <img src={ele.image} alt="" className="cartIcon_product_icon"/>
    <p className="cartitems_format_title">{ele.name}</p>
    <p>${ele.new_price}</p>
    <button className="cartItem_qountity">{cartItem[ele.id]}</button>
     <p className="image_to_total">${ele.new_price*cartItem[ele.id]}</p>
     <img className="image_to_remove" src={remove_icon} alt=""  onClick={() => {removeFromCart(ele.id)}}/>
  </div>    
       <hr/>
       </div>


}



})} */}

{all_products
  .filter((ele) => cartItem[ele.id] > 0) // تصفية المنتجات التي لها كميات في السلة
  .map((ele) => (
    <div key={ele.id}> {/* إضافة مفتاح فريد */}
      <div className="cartitems_format">
        <img src={ele.image} alt="" className="cartIcon_product_icon"/>
        <p className="cartitems_format_title">{ele.name}</p>
        <p>${ele.new_price}</p>
        <button className="cartItem_qountity">{cartItem[ele.id]}</button>
        <p className="image_to_total">${ele.new_price * cartItem[ele.id]}</p>
        <img className="image_to_remove" src={remove_icon} alt="" onClick={() => removeFromCart(ele.id)} />
      </div>    
      <hr/>
    </div>
  ))}



    </div>
  )
}
