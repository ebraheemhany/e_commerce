
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";
import Item from '../../Components/item/Item';
import { useContext } from "react";
import "./ShopCategory.css";

 export default function ShopCategory(props) {
const product = useContext(ShopContext)
const data = product.all_products;

  return (
    <div className='Shop_Category'>
    <img className="shopcategory_banner" src={props.banner} alt='' />

    <div className='shop_category_indexSort'>
     <p>
      <span>Showping 1-12</span> out of 36 products
     </p>
       <div className='shopcategory_sort'>
        Sort by <img src={dropdown_icon} alt=''/>
       </div>
    </div>


<div className='shopCategory_products'>
 
{data.map((item , idx) => {
if(props.category === item.category) {
  return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
  
}else {
  return null;
}


})}

</div>

<div className="shopCategory_loadMore">
  Explore More
</div>

    </div>
  )
}
