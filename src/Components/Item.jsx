import React from 'react';
import { Link } from 'react-router';

const Item = ({item}) => {
    const {product_title,product_id} = item
    return (
        <div>
          {product_title}
          <Link to={`${product_id}`}><button className='btn'>Details</button></Link>
        </div>
    );
};

export default Item;