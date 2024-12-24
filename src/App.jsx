import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Products from './pages/products';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Orders from './pages/Orders';
import AddProduct from './pages/AddProduct';
import { useState } from 'react';
import p1 from './Images/p1.jpg'
import p3 from './Images/p3.jpg'
import p5 from './Images/p5.png'
import p6 from './Images/p6.png'
import p7 from './Images/p7.png'
import Users from './pages/Users';

function App() {
  const [products,setProducts]=useState([
    {image:p1,name:"Shirt",brand:"Levi's",price:"20",stock:"300",},
    {image:p5,name:"Shoes",brand:"Nike",price:"24",stock:"450",},
    {image:p3,name:"Hoodie",brand:"Levi's",price:"20",stock:"350",},
    {image:p5,name:"Mobile",brand:"Samsung",price:"120",stock:"520",},
    {image:p6,name:"Bag",brand:"Levi's",price:"20",stock:"300",},
    {image:p7,name:"Shoes",brand:"Nike",price:"24",stock:"450",},
  ])
  
    const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
  return (
    <>
    <div>
       <Navbar/>
       </div>
       <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path="/products" element={<Products products={products} />}/>
        <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />}/>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
    </>
  );
}

export default App;

