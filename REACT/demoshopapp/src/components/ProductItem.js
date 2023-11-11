import React, {useState} from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  let  [title,setTitle] = useState(props.title);

  function clickHandler(){
    setTitle("Popcorn");
    console.log("button clicked");
  }
  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button> 
      { /* if bracket used after clickHandler then function
       will be called without click */}
    </Card>
  );
}

export default ProductItem;