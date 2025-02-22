import "./NavBar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";

import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
export default function NavBar() {
const {getTotalCartItem , menuOpen , setMenuOpen} = useContext(ShopContext);
console.log(menuOpen)

  return (
    <>
    <div className="navbar">
         <div className="nav-logo">
           <img src={logo} alt="logo" />
          <NavLink to={'/'} ><p>SHOPPER</p></NavLink>  
         </div>
         
          <ul className="nav-menu">
          <NavLink to={'/'}><li>Shop</li></NavLink>
            <NavLink to={'/Mens'} ><li>Men</li></NavLink>
            <NavLink to={'/Women'}><li>Women</li></NavLink>
            <NavLink to={'/Kids'}> <li>Kids</li></NavLink>
          </ul>

           <div className="nav-login-cart">
                <NavLink to={'/Login'}><button>Login</button></NavLink>
           <div>
           <NavLink to={'/Cart'}>  <img src={cart_icon} alt="cart-icon" /></NavLink>
           <div className="nav-cart-count">{getTotalCartItem()}</div>
           </div>
           <div onClick={() => setMenuOpen(prev => !prev)} className="nav_menu" >
         
           <i  class="fa-solid fa-bars"></i>
           </div>
           </div>
        
      
    </div>


{menuOpen === true ? 
  <div className="Show_menu">
  <div className="Close_icon" onClick={() => setMenuOpen((prve) => !prve)}>
  <i class="fa-solid fa-xmark"></i>
  </div>
<ul className="show_nav_menu">
          <NavLink to={'/'}><li>Shop</li></NavLink>
            <NavLink to={'/Mens'} ><li>Men</li></NavLink>
            <NavLink to={'/Women'}><li>Women</li></NavLink>
            <NavLink to={'/Kids'}> <li>Kids</li></NavLink>
            <NavLink to={'/Login'}><button>Login</button></NavLink>
          </ul>
    

</div> : null

}

    </>
  )
}
