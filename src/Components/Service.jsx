import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const Service = () => {
  const data = [
    { name: "South Asia", value: 40 },
    { name: "Southeast Asia", value: 25 },
    { name: "Middle East", value: 15 },
    { name: "Central Asia", value: 10 },
    { name: "East Asia", value: 10 },
  ];
  const location = useLocation();
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/service") {
      titleElement.innerHTML = "Service | Gadget Heaven";
    }
  }, [location.pathname]);
  return (
    <div>
      <div className="bg-[#9538E2] p-3 flex flex-col gap-3 items-center mb-4">
        <p className="text-center font-bold text-white text-3xl">Service</p>
        <p className="text-center text-white font-semibold text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <p className="mt-8 text-center font-bold text-3xl">Our Popularity</p>
      <div className="mt-2" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="60%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name }) => name}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex text-white w-full items-center flex-col gap-3 my-5">
        <p className="my-2 bg-[#9538E2] w-full py-4 text-center font-bold text-3xl">Why Choose Us?</p>

        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Served Product</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Most Buyers/Mo</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Buyers/Mo</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center flex-col gap-3 my-5">
        <p className="my-2 text-white bg-[#9538E2] w-full py-4 text-center font-bold text-3xl">Write Something</p>
        <textarea
          type="text"
          placeholder="Accent"
          className="textarea textarea-accent"
        ></textarea>
        <button className="btn btn-accent">Send</button>
      </div>

      <div className="flex  w-full items-center flex-col gap-3 my-5">
        <p className="my-8 bg-[#9538E2] w-full py-4 text-center font-bold text-3xl text-white">Mail Us</p>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" required className="grow" placeholder="Email" />
        </label>
        <button className="btn btn-neutral">Send</button>
      </div>
    </div>
  );
};

export default Service;
