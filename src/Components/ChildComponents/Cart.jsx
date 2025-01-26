import React, { useEffect, useState } from "react";
import { clear_cart, get_cart } from "../../Js_Folder/localstorage";
import CartItems from "./CartItems";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);
  const Get_Cart = get_cart();
  useEffect(() => {
    setCart(Get_Cart);
  }, []);
  let price = 0;
  Get_Cart.map((item) => (price += item.price));

  function delete_cart(e) {
    clear_cart();
    document.getElementById('my_modal_1').showModal()
  }
  function close_modal(){
    navigate("/");
  }

  return (
    <div>
      <section className="my-3 flex lg:flex-row items-center lg:justify-between">
        <p className="font-bold text-2xl">Cart</p>
        <div className="flex justify-between items-center px-3 gap-3">
          <p id="cost" className="font-bold text-xl">
            Total : {price}$
          </p>
          <button className=" btn rounded-3xl text-white bg-violet-400 hover:bg-violet-500 ">
            Sort by Price
          </button>
          <button
            onClick={delete_cart}
            className="btn  text-white bg-violet-400 hover:bg-violet-500  rounded-3xl"
          >
            Purchase
          </button>
        </div>
      </section>
      <section>
        {Cart.length > 0
          ? Cart.map((item) => (
              <CartItems item={item} key={item.product_id}></CartItems>
            ))
          : "No items on cart"}
      </section>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={close_modal} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
