import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Dashboard = () => {
  const [toggle, setToggle] = useState(1);
  const location = useLocation();
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/dashboard") {
      titleElement.innerHTML = "Dahboard | Gadget Heaven";
    }
  }, [location.pathname]);
  return (
    <div>
      <section className="p-4 bg-[#9538E2] w-full flex flex-col items-center">
        <p className="text-white font-bold text-3xl">Dashboard</p>
        <p className="text-base text-center text-white font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="">
          <button
            onClick={() => {
              setToggle(1);
            }}
          >
            Cart
          </button>
          <button
            onClick={() => {
              setToggle(2);
            }}
          >
            Wishlist
          </button>
        </div>
      </section>
      <section>{toggle === 1 ? <Cart></Cart> : <Wishlist></Wishlist>}</section>
    </div>
  );
};

export default Dashboard;
