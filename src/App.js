import React from 'react';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Cart from './Componentes/Cart/Cart';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext';
import { NotificacionProvider } from './Notificacion/Notificacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componentes/Footer/Footer';
import Formulario from './From/Formulario'

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificacionProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos"/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/Formulario' element={<Formulario/>}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </NotificacionProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;

