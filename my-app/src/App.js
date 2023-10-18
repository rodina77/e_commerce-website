
import './App.css';
import My_Nav from "../src/components/my_nav"
import Footer from "../src/components/footer"
import Home from "../src/pages/Home"
import Shop from "../src/pages/shop"
import About from "../src/pages/About"
import Team from "../src/pages/Team"
import Form from "../src/pages/Form"
import CartPage from './pages/cartPage';
import {Routes,Route} from "react-router-dom";
import ProductDetails from './pages/projectDetail';

import { CartProvider } from 'react-use-cart';

function App() {

  
  return (
    
    <div className="App">
      <CartProvider>
      <My_Nav></My_Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Team' element={<Team/>}></Route>
        <Route path='/Form' element={<Form/>}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails />} /> 
        <Route path='/Cart' element={<CartPage/>}></Route>

      </Routes>
      <Footer></Footer>
      </CartProvider>
  
    </div>
  );
}

export default App;
