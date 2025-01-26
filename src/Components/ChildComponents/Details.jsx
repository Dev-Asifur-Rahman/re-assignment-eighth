import React, { useContext, useEffect, useState } from "react";
import { data, useParams } from "react-router";
import { ContextProvider } from "../../Js_Folder/context";

const Details = () => {
  const id_number = useParams().id;
  const [all_data, setAllData] = useState([]);
  const [id, setId] = useState({});
  const { data } = useContext(ContextProvider);
  useEffect(() => {
    setAllData(data);
  }, [data]);
  useEffect(() => {
    setId(all_data.find((single) => single.product_id == id_number));
  }, [all_data, id_number]);
//     const {
//       product_title,
//       product_image,
//       category,
//       price,
//       description,
//       Specification,
//       availability,
//     } = id;
  return (
    <div>
      <div className="w-full bg-[#9538E2] text-center lg:h-[35vh] h-fit p-2 border">
        <p className="text-white font-bold text-3xl">Product Details</p>
        <p className="text-base text-center text-white font-medium">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="lg:w-[60vw] mx-auto w-full border lg:h-[300px] h-fit ">
          <img src={id?.product_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
