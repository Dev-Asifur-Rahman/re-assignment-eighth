import React from "react";

const CartItems = ({ item }) => {
  return (
    <div className="lg:w-[70%] shadow-lg rounded-lg lg:justify-start mx-auto md:justify-start items-center  lg:gap-2 md:gap-2 gap-3 p-3 md:w-[80%] w-[98%] flex lg:flex-row md:flex-row flex-col">
      <div className=" lg:h-[10vh] lg:w-[10%] md:w-[15%] md:h-[15%] w-[50%] h-[50%]">
        <img className="w-full h-full rounded-lg" src={item.product_image} alt="" />
      </div>
      <div className=" flex justify-center lg:text-start md:text-start text-center lg:justify-start flex-col lg:w-[65%] md:w-[65%] w-full">
        <p className="font-semibold text-black text-xl">{item.product_title}</p>
        <ul className="flex lg:flex-row md:flex-row mx-auto md:mx-0 lg:mx-0 lg:gap-1 text-[#09080F99]  flex-col lg:items-center md:items-start items-start">
          {item.Specification.map((specific, index) => (
            <li key={index}>{specific}</li>
          ))}
        </ul>
        <p className="font-semibold text-black text-base">
          Price :{item.price}$
        </p>
      </div>
    </div>
  );
};

export default CartItems;
