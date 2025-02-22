import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
export default function ProductDisplay({product}) {


const {addtoCart} = useContext(ShopContext)


  return (
    <div className='ProductDisplay'>
        <div className='productDisplay_left'>
            <div className='productDisplay_left_img_list'>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
            </div>
           <div className='productDisplay_left_img'>
             <img className='productDisplay_left_main_img' src={product.image} alt="" />
           </div>

        </div>
        <div className='productDisplay_right'>
            <h1>{product.name}</h1>
         <div className="star_price">
          
         <div className='productDisplay_right_star'>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull} alt=""/>
                      <p>(122)</p>
                </div>
                <div className="productDisplay_right_prices">
                    <div className="productDisplay_right_prices_old">${product.old_price}</div>
                    <div className="productDisplay_right_prices_new">${product.new_price}</div>
                    </div> 
          
          
          </div>  
 
                    <div className="productDisplay_right_discription">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dignissimos corporis vitae debitis 
                               hic eligendi. Tenetur sequi aperiam voluptas ipsum est dolores quo mollitia! Natus pariatur.
                    </div>
  
                    <div className="productDisplay_right_size">
                          <h3>Select Size</h3>
                          <div className="productDisplay_right_size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>Xl</div>
                            <div>XXl</div>
                          </div>
                    </div>
               
                        <button onClick={() =>{addtoCart(product.id)}}>Add to Cart</button>

        </div>


    </div>
  )
}
