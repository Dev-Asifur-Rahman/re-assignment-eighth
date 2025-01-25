import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../Js_Folder/context";
import { useLocation } from "react-router";

const Statistics = () => {
  const location = useLocation();
  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement && location.pathname === "/statistics") {
      titleElement.innerHTML = "Statistics | Gadget Heaven";
    }
  }, [location.pathname]);
  const { color } = useContext(ContextProvider);
  return (
    <div>
      <p>{color}</p>
      statistics
    </div>
  );
};

export default Statistics;
