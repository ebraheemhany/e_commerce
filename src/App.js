
import { Route, Routes } from 'react-router';

import NavBar from './Components/NavBar/NavBar';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import Mens from './Pages/Mens/Men';
import Women from './Pages/Women/Women';
import Kids from './Pages/Kids/Kids';
import Product from './Pages/Product/Product';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";


function App() {
  return (
<>
<NavBar />
<Routes>
  <Route path='/' element={<Shop />} />
   <Route path='/Login' element={<Login />}/>
 <Route path='/Cart' element={<Cart />} />
 <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men" />} />
 <Route path='/Women' element={<ShopCategory banner={women_banner} category="women"/>} />
<Route path='/Kids' element={<ShopCategory banner={kids_banner} category="kid"  />} />
<Route path='/Product' element={<Product />}>
<Route path=':ProductId' element={<Product />} />
</Route>
</Routes>
<Footer />
</>
  );
}

export default App;
