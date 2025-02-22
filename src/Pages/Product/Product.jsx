import React, { useContext } from 'react'

import { ShopContext } from '../../Context/ShopContext'
import ProItem from "../../Components/Pro_item/ProItem";
import { useParams } from 'react-router-dom';
import ProductDisplay from "../../Components/productDisblay/ProductDisplay";


export default function Product() {
const all_product = useContext(ShopContext);
const data = all_product.all_products;

const {ProductId} = useParams();
const product = data.find((ele) => ele.id === Number(ProductId) );



  return (
    <>

<ProItem product={product} />
<ProductDisplay product={product} />


    </>
  )
}
