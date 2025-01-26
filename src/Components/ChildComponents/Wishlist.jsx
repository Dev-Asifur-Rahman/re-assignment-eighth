import React, { useEffect, useState } from 'react';
import { get_wishlist } from '../../Js_Folder/localstorage';
import WishListItems from './WishListItems';

const Wishlist = () => {
    const [WishLists,setWishlists] = useState([])
    const Get_WishList  = get_wishlist()
    useEffect(()=>{
        setWishlists(Get_WishList)
    },[])
    return (
        <div>
             {
               WishLists.length > 0 ? WishLists.map(item=><WishListItems item={item} key={item.product_id}></WishListItems>):'No items on wishlist'
            }
        </div>
    );
};

export default Wishlist;