import React from 'react';
// import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {brand, price, img, description} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{brand}</p>
            <p>{description}</p>
            <p>Price - ₹ {price}/-</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards