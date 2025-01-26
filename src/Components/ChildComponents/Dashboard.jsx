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
      <section className="p-4 bg-[#9538E2] w-full flex flex-col items-center gap-5">
        <p className="text-white font-bold text-3xl">Dashboard</p>
        <p className="text-base text-center text-white font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div id="dashboard_button" className="flex justify-center gap-4">
          <button className='btn btn-ghost rounded-2xl dashboard_active'
            onClick={(e) => {
              const buttons = document.querySelectorAll(
                "#dashboard_button button"
              );
              
              for (const button of buttons) {
                button.classList.remove("dashboard_active");
                button.classList.add("outline")
              }
              setToggle(1);
              e.target.classList.add("dashboard_active");
              e.target.classList.remove("outline")
            }}
          >
            Cart
          </button>
          <button className='btn btn-ghost rounded-2xl outline'
            onClick={(e) => {
              const buttons = document.querySelectorAll(
                "#dashboard_button button"
              );
              
              for (const button of buttons) {
                button.classList.remove("dashboard_active");
                button.classList.add("outline")
              }
              setToggle(2);
              e.target.classList.add("dashboard_active");
              e.target.classList.remove("outline")
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
