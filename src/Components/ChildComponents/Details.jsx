import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ContextProvider } from "../../Js_Folder/context";
import wishlistimage from "../../../images/Group 2.png";
import CartLogo from "../../../images/Frame.png";
import {
  get_cart,
  get_wishlist,
  set_item_to_cart,
  set_item_to_wishlist,
} from "../../Js_Folder/localstorage";
import { toast } from "react-toastify";
import Rating from "./Rating";

const Details = () => {
  const navigate = useNavigate();
  const id_number = useParams().id;
  const [all_data, setAllData] = useState([]);
  const [id, setId] = useState({});
  const { data } = useContext(ContextProvider);
  useEffect(() => {
    setAllData(data);
  }, [data]);
  useEffect(() => {
    if (all_data.length > 0) {
      const find_product = all_data.find(
        (single) => single.product_id == id_number
      );
      setId(find_product);
    }
  }, [all_data, id_number]);
  const addToCart = (item) => {
    const Cart = get_cart();
    const id = item.product_id;
    const find_item = Cart.find((item) => item.product_id == id);
    if (find_item) {
      toast.error("Already added");
    } else {
      set_item_to_cart(item);
      toast.success("Added Successfully");
      navigate("/");
    }
  };

  const addToWishlist = (item) => {
    const Wishlist = get_wishlist();
    const id = item.product_id;
    const find_item = Wishlist.find((item) => item.product_id == id);
    if (find_item) {
      toast.error("Already added");
    } else {
      set_item_to_wishlist(item);
      toast.success("Added Successfully");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="w-full bg-[#9538E2] text-center lg:h-[35vh] h-fit p-2">
        <p className="text-white font-bold text-3xl">Product Details</p>
        <p className="text-base text-center text-white font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        {/* overwrite div  */}
        <div className="p-2 bg-white my-3 rounded-lg shadow-lg lg:w-[60vw] lg:inline-flex lg:justify-around lg:flex-row flex-col hidden w-full lg:h-[60vh] h-fit ">
          <div className="lg:w-[45%] lg:h-[50%] w-full self-center">
            <img
              src={id?.product_image}
              className="lg:w-[60%] rounded-lg w-full h-full lg:mx-auto"
              alt=""
            />
          </div>

          <div className=" flex px-2 flex-col lg:justify-center items-start lg:w-[45%] gap-2">
            <p className="font-semibold text-2xl">{id?.product_title}</p>
            <p className="font-semibold text-lg">Price : $ {id?.price}</p>
            <p className="text-start text-base text-[#09080F99]">
              {id?.description}
            </p>
            <p className="font-bold">Specification</p>
            <ul className="flex flex-col items-start">
              {id?.Specification?.map((spec, index) => {
                return (
                  <li key={index}>
                    {index + 1}. {spec}
                  </li>
                );
              })}
            </ul>
            {id && <Rating rating={id?.rating} key={id?.product_id}></Rating>}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  addToCart(id);
                }}
                className=" btn text-white text-base rounded-3xl font-bold bg-[#9538E2]"
              >
                Add to Cart <img src={CartLogo} alt="" />
              </button>
              <div
                onClick={() => {
                  addToWishlist(id);
                }}
                className=""
              >
                <img src={wishlistimage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
