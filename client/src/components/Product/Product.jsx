import React, { useContext } from 'react'
import './product.css'
import axios from 'axios';
import { UserContext } from '../../App';

export default function Product({ product }) {

  const { user, setUser } = useContext(UserContext);


  async function addToCart() {
    const index = user.cart.findIndex(ele => ele._id === product._id);

    if (index === -1) {
      const newCart = [...user.cart, { ...product, quantity: 1 }]
      setUser({ ...user, cart: newCart })

      await axios.patch('http://localhost:5000/api/user/cart', { cart: newCart }, {
        headers: { Authorization: user.token },
      })

    } else {
      alert('already in cart');
    }
  }
  return (

    <div className="product-card" >

      <img src={product.image} alt="" />

      <div className="product-box">
        <h2 title={product.name}>{product.name}</h2>
        <span>₹{product.price}</span>
        <p>{product.author}</p>
      </div>
      <div className="row-btn">
        <button className='action-btn' onClick={addToCart}>Add Cart</button>
        <button className='action-btn'>View</button>
      </div>
    </div>
  );
}
