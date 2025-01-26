import React, { useEffect, useState } from 'react';
import { get_cart, set_item_to_cart } from '../../Js_Folder/localstorage';
import CartItems from './CartItems';

const Cart = () => {
    const [Cart,setCart] = useState([])
    const Get_Cart = get_cart()
    useEffect(()=>{
        setCart(Get_Cart)
    },[])
    const set_Cart = set_item_to_cart
    return (
        <div>
            {
               Cart.length > 0 ? Cart.map(item=><CartItems item={item} key={item.product_id}></CartItems>):'No items on cart'
            }
        </div>
    );
};

export default Cart;