import React , {useState} from "react";

function Item({ name, category }) {
  const [cart,setCart] = useState('');

  function cartHandler(){
    setCart(cart => cart === '' ? 'in-cart' : '')
  }
  return (
    <li className={cart} onClick={cartHandler}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? 'remove' : 'add'}>{cart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
