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

const Home = () => {
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
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
  return (
    <div className="w-[95vw] mx-auto">
      {/* banner section for other route  */}
      <div
        style={{ padding: "8px" }}
        className={`${
          location.pathname === "/" ? "hidden" : "inline-flex"
        } lg:flex-row lg:gap-0 gap-3 flex-col justify-between items-center w-full`}
      >
        <p className="font-bold text-[24px]">Gadget Heaven</p>
        <nav className="flex items-center gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"statistics"}>Statistics</NavLink>
          <NavLink to={"dashboard"}>Dashboard</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to={'/dashboard'}>
            <img src={cartimage} alt="" />
          </Link>
          <Link to={'/dashboard'}>
            <img src={wishlistimage} alt="" />
          </Link>
        </div>
      </div>
      {/* banner section  for home */}
      <section
        style={{ marginBottom: `420px` }}
        className={`${
          location.pathname === "/"
            ? window.innerWidth > 768
              ? "inline-flex"
              : "hidden"
            : "hidden"
        } w-full lg:h-[70vh] bg-[#9538E2] relative rounded-[8px] flex-col items-center gap-4`}
      >
        <div
          style={{ padding: "8px" }}
          className="flex justify-between items-center w-full"
        >
          <p className="font-bold text-[24px] text-[#FFFFFF]">Gadget Heaven</p>
          <nav className="flex items-center gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"statistics"}>Statistics</NavLink>
            <NavLink to={"dashboard"}>Dashboard</NavLink>
          </nav>
          <div className="flex items-center gap-2">
          <Link to={'/dashboard'}>
            <img src={cartimage} alt="" />
          </Link>
          <Link to={'/dashboard'}>
            <img src={wishlistimage} alt="" />
          </Link>
          </div>
        </div>
        <p className="lg:text-5xl text-4xl font-bold text-center text-white w-[60%]">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </p>
        <p className="text-base text-center font-bold text-white w-[60%]">
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
          wishlist,
          setWishlist,
          cart,
          setCart,
        }}
      >
        <Outlet></Outlet>
      </ContextProvider.Provider>
    </div>
  );
};

export default Home;
