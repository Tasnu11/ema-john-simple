import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart}=props;
    const {name,img,ratings,seller,price} =product;
    
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>price:${price}</p>
           <p><small>seller:{seller}</small></p>
           <p><small>ratings:{ratings} stars</small></p>
           </div>
           <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
               <p className='btn-text'>Add to cart</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;