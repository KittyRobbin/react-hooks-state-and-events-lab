import React, {useState}from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  const toggleInCart = ()=> {
    console.log('Button clicked');
    setIsInCart(!isInCart);
    
  };
  console.log('isInCart:', isInCart);
  

  const itemClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{buttonText}</button>
    </li>
  );
};

export default Item;
