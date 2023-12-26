//reacts
import axios from 'axios';
import React from 'react';

//Styles
import './scss/app.scss';


//Components
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart/Cart';
import Login from './pages/Login';
//Router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



//json
// import pizzas from './assets/pizzas.json'; данные перемещены на mok API
// https://657c7774853beeefdb998017.mockapi.io/items

function App() {

  return (

    <div className="wrapper">
      <Header />
      <div className="content">

          <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/cart'  element={<Cart />}/>
            <Route path='*'  element={<NotFound />}/>
            <Route path='/login'  element={<Login />}/>
          </Routes>
        </div>
      </div>

  );
}

export default App;
