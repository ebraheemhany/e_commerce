import { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";


export const ShopContext = createContext(null);

const GetDefaultCart = () => {
const cart ={};
for(let index =0 ; index < all_products.length + 1 ; index++){
    cart[index] = 0;
}
return cart;

}

const ShopContextProvider = (props) => {

       // start menu open
   
       const[menuOpen , setMenuOpen] = useState(false);

      //  end menu open
    const [cartItem , setCartItem] = useState(GetDefaultCart())

    const addtoCart = (itemId) => {
        setCartItem((prev) => {
          const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
         
          return updatedCart;
        });
      };


      const removeFromCart = (itemId) => {
        setCartItem((prev) => {
          const removefromdCart = { ...prev, [itemId]: prev[itemId] - 1 };
       
          return removefromdCart;
        });
      };

const getTotalCartItem = () => {
let totalItem = 0;

for(const itemid in cartItem) {

if(cartItem[itemid] > 0) {
  totalItem += cartItem[itemid];
}

}
return totalItem;

}


const contextValue = {all_products , cartItem , addtoCart , removeFromCart , getTotalCartItem , menuOpen , setMenuOpen};


return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)

}


export default ShopContextProvider;



