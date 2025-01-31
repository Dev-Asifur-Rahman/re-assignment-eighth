import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Js_Folder/context";
import { useLocation } from "react-router";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const [Data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const location = useLocation();
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/statistics") {
      titleElement.innerHTML = "Statistics | Gadget Heaven";
    }
  }, [location.pathname]);
  const { data } = useContext(ContextProvider);
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div>
      <div className="bg-[#9538E2] p-3 flex flex-col gap-3 items-center mb-4">
        <p className="text-center font-bold text-white text-3xl">Statistics</p>
        <p className="text-center text-white font-semibold text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <p className=" font-bold lg:text-start md:text-start text-center text-3xl my-2">Statistics</p>
      <div className="h-[40vh] w-full">
        {Data.length > 0 ?<ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={Data}>
            {windowWidth> 320 && <XAxis dataKey="product_title" /> }
            {windowWidth > 320 && <YAxis dataKey="price" /> }
            <Bar dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>:<div className="text-center text-3xl">No Data Available for Chart</div>}
        
      </div>
    </div>
  );
};

export default Statistics;
