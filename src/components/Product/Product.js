import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {addToBtn,product} = props;
  const {name,seller,img,ratings,price}=product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <h6 className='productName'>{name}</h6>
      <p>Seller : {seller}</p>
      <p>Price : {price}</p>
      <p>Rating : {ratings}</p>
      </div>
      <button className='btn' onClick={()=>addToBtn(product)}><p className="AddCart">Add Cart</p><FontAwesomeIcon style={{marginLeft:"5px"}} icon={faShoppingCart}></FontAwesomeIcon></button>
      
    </div>
      
  );
};

export default Product;