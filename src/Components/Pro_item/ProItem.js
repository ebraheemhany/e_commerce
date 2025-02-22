import React from 'react'
import "./Pro_item.css";
import arrow_icon  from "../Assets/breadcrum_arrow.png";


export default function Pro_item(product) {
//   product من  propsهنا احنا وخدين 
const element = product.product;

  return (
    <div className='Pro_item'>

home <img src={arrow_icon} alt='' /> shop <img src={arrow_icon}alt='' /> {element.category}  <img src={arrow_icon} alt='' /> {element.name}

    </div>
  )
}
