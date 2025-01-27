import React from 'react';
import { Link } from 'react-router';

const Item = ({item}) => {
    const {product_title,product_id,product_image,price} = item
     
  
    return (
        <div className=' w-[98%] p-2 text-center rounded-lg shadow-2xl md:w-[95%] lg:w-[90%]'>
          <div className="w-full lg:w-full md:w-[80%] md:mx-auto lg:h-[35vh] h-[45vh]">
            <img  className='h-full rounded-lg w-full' src={product_image} alt="" />
          </div>
          <p className="my-2 text-xl font-semibold">{product_title}</p>
          <p className="my-2 font-medium text-[#09080F99] text-lg">Price: {price}$</p>
          <Link to={`details/${product_id}`}><button className='btn hover:bg-amber-400 rounded-lg mb-2'>View Details</button></Link>
        </div>
    );
};

export default Item;