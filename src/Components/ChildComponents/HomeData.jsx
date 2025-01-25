import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../Js_Folder/context";
import Item from "../Item";

const HomeData = () => {
    const {data} = useContext(ContextProvider)
    useEffect(()=>{
        const get_buttons = document.querySelectorAll('#buttons button')
        for(const button of get_buttons){
            button.classList.add('rounded-3xl')
        }
    },[])
    const get_data_by_category = (category) =>{
        console.log(category)
    }
    
  return (
    <div className=" flex lg:flex-row flex-col justify-between items-center">
      <div id="buttons" className="lg:w-[30%] w-full border flex flex-col items-center gap-2 py-3">
        <button className="btn" onClick={()=>{get_data_by_category('all')}}>All</button>
        <button className="btn" onClick={()=>{get_data_by_category('Smartphones')}} >Smartphones</button>
        <button className="btn" onClick={()=>{get_data_by_category('Televisions')}} >Televisions</button>
        <button className="btn" onClick={()=>{get_data_by_category('Accessories')}}>Accessories</button>
        <button className="btn" onClick={()=>{get_data_by_category('Laptops')}}>Laptops</button>
      </div>
      <section className="lg:w-[70%] w-full border  grid lg:grid-cols-3 grid-cols-1">
            {
                data.map(item=><Item item={item} key={item.product_id}></Item>)
            }
      </section>
    </div>
  );
};

export default HomeData;
