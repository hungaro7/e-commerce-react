
import NavBar from './components/NavBar';
import Nosotros from './components/Nosotros';
import "./main.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import CheckOut from './components/CheckOut';



function App() {
  
  return (
    <div>
        <CartProvider> 
          <BrowserRouter>

            <NavBar/>

            <Routes>
            <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:categoria" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />}/>
              <Route path="/contacto" element={<Contacto />}/>
              <Route path="/carrito" element={<Carrito />}/>
              <Route path="/checkout" element={<CheckOut />}/>
            </Routes>
            
          </BrowserRouter>    
        </CartProvider>
    </div>
  );
}

export default App;
