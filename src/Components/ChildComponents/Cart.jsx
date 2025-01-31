import React, { useEffect, useState } from "react";
import { clear_cart, get_cart } from "../../Js_Folder/localstorage";
import CartItems from "./CartItems";
import { useNavigate } from "react-router";
import success_icon from "../../../images/Group.png";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);
  const Get_Cart = get_cart();
  useEffect(() => {
    setCart(Get_Cart);
  }, []);
 

  let price = 0;
  Get_Cart.map((item) => (price += item.price));

  const purchase_button =  document.getElementById('purchase')
  useEffect(()=>{
    if(purchase_button && Cart?.length === 0){
        purchase_button.setAttribute('disabled',true)
      }
  },[Cart])
  function delete_cart(e) {
    clear_cart();
    purchase_button.setAttribute('disabled',true)
    document.getElementById("my_modal_1").showModal();
  }
  function close_modal() {
    navigate("/");
  }
  function sort_items() {
    const sortedItems = [...Get_Cart].sort((a, b) => b.price - a.price);
    setCart(sortedItems);
  }
  const error_item = <div className='font-bold text-3xl text-center'>
        No items added to Cart
    </div>
  return (
    <div>
      <section className="my-3 flex lg:flex-row flex-col gap-3 lg:gap-0 items-center lg:justify-between">
        <p className="font-bold text-2xl">Cart</p>
        <div className="flex lg:justify-between lg:flex-row flex-col items-center px-3 gap-3">
          <p id="cost" className="font-bold text-center.
          03 text-xl">
            Total : {price}$
          </p>
          <button
            onClick={sort_items}
            className=" btn rounded-3xl text-white bg-violet-400 hover:bg-violet-500 "
          >
            Sort by Price
          </button>
          <button id="purchase"
            onClick={delete_cart}
            className="btn  text-white bg-violet-400 hover:bg-violet-500  rounded-3xl"
          >
            Purchase
          </button>
        </div>
      </section>
      <section className='my-2 flex flex-col gap-2'>
        {Cart.length > 0
          ? Cart.map((item) => (
              <CartItems item={item} key={item.product_id}></CartItems>
            ))
          : error_item}
      </section>
      {/* modal  */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center gap-2">
            <div className="">
              <img src={success_icon} alt="" />
            </div>
            <p className="font-bold text-2xl">Payment Successful</p>
            <p className="font-medium text-base">Thanks for purchasing</p>
            <p className="font-medium text-base">Total Amount : {price}$</p>
            <div className="modal-action w-full px-2">
              <form method="dialog" className="w-full">
                <button onClick={close_modal} className="btn rounded-3xl w-full">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
