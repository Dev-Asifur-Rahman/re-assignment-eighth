import React, { useContext, useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router";
import { ContextProvider } from "../../Js_Folder/context";
import wishlistimage from "../../../images/Group 2.png";
import CartLogo from '../../../images/Frame.png'
import { get_cart, get_wishlist, set_item_to_cart, set_item_to_wishlist } from "../../Js_Folder/localstorage";

const Details = () => {
  const navigate = useNavigate()
  const id_number = useParams().id;
  const [all_data, setAllData] = useState([]);
  const [id, setId] = useState({});
  const { data } = useContext(ContextProvider);
  useEffect(() => {
    setAllData(data);
  }, [data]);
  useEffect(() => {
    setId(all_data.find((single) => single.product_id == id_number));
  }, [all_data, id_number]);

  const addToCart = (item) =>{
    const Cart = get_cart()
    const id = item.product_id
    const find_item = Cart.find(item=>item.product_id == id)
    if(find_item){
      alert('Already Added')
    }
    else{
      set_item_to_cart(item)
      navigate('/')
    }
  }

  const addToWishlist = (item) =>{
    
    const Wishlist = get_wishlist()
    const id = item.product_id
    const find_item = Wishlist.find(item=>item.product_id == id)
    if(find_item){
      alert('Already Added')
    }
    else{
      set_item_to_wishlist(item)
      navigate('/')
    }
  }
  //     const {
  //       product_title,
  //       product_image,
  //       category,
  //       price,
  //       description,
  //       Specification,
  //       availability,
  //     } = id;
  return (
    <div>
      <div className="w-full bg-[#9538E2] text-center lg:h-[35vh] h-fit p-2 border">
        <p className="text-white font-bold text-3xl">Product Details</p>
        <p className="text-base text-center text-white font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="lg:w-[60vw] mx-auto w-full border lg:h-[300px] h-fit ">
          <img src={id?.product_image} alt="" />
          <div className="flex gap-2 items-center">
            <button onClick={()=>{addToCart(id)}} className=" btn text-white text-base rounded-3xl font-bold bg-[#9538E2]">Add to Cart <img src={CartLogo} alt="" /></button>
            <div onClick={()=>{addToWishlist(id)}} className="">
              <img src={wishlistimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
