import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from "react-router";
import { ContextProvider } from "../Js_Folder/context";
import cartimage from "../../images/Group 1.png";
import wishlistimage from "../../images/Group 2.png";
import banner from "../../images/banner.jpg";
import { get_cart, get_wishlist } from "../Js_Folder/localstorage";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const get_data = useLoaderData().data;

  useEffect(() => {
    setData(get_data);
  }, [get_data]);
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/") {
      titleElement.innerHTML = "Gadget Heaven";
    }
  }, [location.pathname]);

  const Get_Cart = get_cart();
  const Get_WishList = get_wishlist();
  return (
    <div className="lg:w-[95vw] w-full mx-auto">
      {/* banner section for other route  */}
      <div
        style={{ padding: "8px" }}
        className={`${
          location.pathname === "/" ? "hidden" : "inline-flex"
        } lg:flex-row lg:gap-0 gap-3 flex-col justify-between items-center w-full`}
      >
        <p className="font-bold text-[24px]">Gadget Heaven</p>
        <nav className="flex lg:justify-center lg:flex-row flex-col  lg:gap-4 gap-2 md:flex md:items-center md:gap-4 items-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink className={''} to={"statistics"}>Statistics</NavLink>
          <NavLink to={"dashboard"}>Dashboard</NavLink>
          <NavLink className={''} to={"service"}>Service</NavLink>
        </nav>
        <div className="flex lg:justify-end justify-center items-center gap-2">
          <Link to={"/dashboard"}>
            <div className="indicator">
              <span className="indicator-item  text-[8px]  text-white bg-black badge top-[5px] rounded-full badge-sm">
                {Get_Cart.length}
              </span>
              <img src={cartimage} alt="" />
            </div>
          </Link>
          <Link to={"/dashboard"}>
            <div className="indicator">
              <span className="indicator-item  text-[8px]  text-white bg-black badge top-[5px] rounded-full badge-sm">
                {Get_WishList.length}
              </span>
              <img src={cartimage} alt="" />
            </div>
          </Link>
        </div>
      </div>
      {/* banner section  for home */}
      <section
        className={`lg:px-5 pt-2 mb-5 lg:mb-[420px] ${
          location.pathname === "/" ? "inline-flex" : "hidden"
        } w-full lg:h-[70vh] h-fit py-4 bg-[#9538E2] relative rounded-none lg:rounded-[8px] flex-col items-center gap-4`}
      >
        <div
          style={{ padding: "8px" }}
          className="flex lg:flex-row lg:gap-0 gap-3 flex-col justify-between items-center w-full"
        >
          <p className="font-bold text-[24px] text-[#FFFFFF]">Gadget Heaven</p>
          <nav className="flex items-center lg:flex-row flex-col lg:gap-4 gap-2">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"statistics"}>Statistics</NavLink>
            <NavLink to={"dashboard"}>Dashboard</NavLink>
            <NavLink to={"service"}>Service</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Link to={"/dashboard"}>
              <div className="indicator">
                <span className="indicator-item  text-[8px]  text-white bg-black badge top-[5px] rounded-full badge-sm">
                  {Get_Cart.length}
                </span>
                <img src={cartimage} alt="" />
              </div>
            </Link>
            <Link to={"/dashboard"}>
              <div className="indicator">
                <span className="indicator-item  text-[8px]  text-white bg-black badge top-[5px] rounded-full badge-sm">
                  {Get_WishList.length}
                </span>
                <img src={wishlistimage} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <p className="lg:text-5xl w-[90%] text-3xl font-bold text-center text-white lg:w-[60%]">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </p>
        <p className="text-base  w-[90%] text-center font-bold text-white lg:w-[60%]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-[24px]">Shop Now</button>
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "12px",
          }}
          className={`w-[75%] lg:inline hidden absolute left-[12.5%] top-[80%] h-[450px]`}
        ></div>
      </section>

      <ContextProvider.Provider
        value={{
          color: "silver",
          data,
          setData,
        }}
      >
        <Outlet></Outlet>
        <ToastContainer />
      </ContextProvider.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
