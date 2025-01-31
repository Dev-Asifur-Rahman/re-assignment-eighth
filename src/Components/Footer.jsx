import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-[#FFFFFF] shadow-2xl flex-col my-6 py-4 gap-3 w-full">
      <p className="font-semibold text-center text-3xl">Gadget Heaven</p>
      <p className="font-semibold text-center text-base text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <section className="flex bg-[#FFFFFF] lg:flex-row gap-3 flex-col lg:items-start items-center lg:justify-center">
        <div className="text-center">
          <p className="text-center font-bold text-lg">Services</p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Product Support
          </p>
          <p className="font-normal text-center text-base text-[#09080F99]">Order Tracking</p>
          <p className="font-normal text-center text-base text-[#09080F99]">Shipping & Delivery</p>
          <p className="font-normal text-center text-base text-[#09080F99]">Returns</p>
        </div>
        <div className="text-center">
          <p className="text-center font-bold text-lg">Company</p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            About Us{" "}
          </p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Careers{" "}
          </p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Contact
          </p>
        </div>
        <div className="text-center">
          <p className="text-center font-bold text-lg">Legal</p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Terms of Service
          </p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Privacy{" "}
          </p>
          <p className="font-normal text-center text-base text-[#09080F99]">
            Policy Cookie Policy
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
