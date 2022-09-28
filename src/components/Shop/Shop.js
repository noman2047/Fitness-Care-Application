import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products,setProducts]=useState([])
  const [totalProduct,setTotalProduct]=useState([])
  useEffect(()=>{
    fetch('products.json')
    .then(req=>req.json())
    .then(data=>setProducts(data))
  },[])
  const addToBtn = (catchProduct)=>{
    console.log(catchProduct);
    const newProduct=[...totalProduct,catchProduct];
    setTotalProduct(newProduct);
    
  }
  return (
    <div className="shopContainer">
      <div className="components-container">
        {
          products.map(product=><Product key={product.id} product={product} addToBtn={addToBtn}></Product>)
        }
      </div>
      <div className="order-summary">
        <Cart cart={totalProduct.length}></Cart>
      </div>
    </div>
  );
};

export default Shop;