import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Js_Folder/context";
import Item from "../Item";

const HomeData = () => {
    const {data} = useContext(ContextProvider)
    const [recieve_data,setRecieved_Data] = useState(data) 
    useEffect(()=>{
        setRecieved_Data(data)
    },[data])
    useEffect(()=>{
        const get_buttons = document.querySelectorAll('#buttons button')
        for(const button of get_buttons){
            button.classList.add('rounded-3xl')
        }
    },[])
    const get_data_by_category = (e) =>{
        let filtered_data
        const get_buttons = document.querySelectorAll('#buttons button')
        for(const button of get_buttons){
            button.classList.remove('clicked')
        }
        e.target.classList.add('clicked')

        if(e.target.innerText === 'All'){
            filtered_data = data
        }
        else if(e.target.innerText === 'Smartphones'){
            filtered_data = data.filter(item=>item.category === 'Smartphones')
            
        }
        else if(e.target.innerText === 'Televisions'){
            
            filtered_data = data.filter(item=>item.category === 'Televisions')
            
        }
        else if(e.target.innerText === 'Accessories'){
            
            filtered_data = data.filter(item=>item.category === 'Accessories')
            
        }
        else if(e.target.innerText === 'Laptops'){
            filtered_data = data.filter(item=>item.category === 'Laptops') 
        } 
        setRecieved_Data(filtered_data)  
    }
  return (
    <div className=" flex lg:flex-row flex-col justify-between items-center">
      <div id="buttons" className="lg:w-[30%] w-full border flex flex-col items-center gap-2 py-3">
        <button className="btn clicked" onClick={get_data_by_category}>All</button>
        <button className="btn" onClick={get_data_by_category} >Smartphones</button>
        <button className="btn" onClick={get_data_by_category} >Televisions</button>
        <button className="btn" onClick={get_data_by_category}>Accessories</button>
        <button className="btn" onClick={get_data_by_category}>Laptops</button>
      </div>
      <section className="lg:w-[70%] w-full border  grid lg:grid-cols-3 grid-cols-1 place-items-center">
            {
                recieve_data.map(item=><Item item={item} key={item.product_id}></Item>)
            }
      </section>
    </div>
  );
};

export default HomeData;
