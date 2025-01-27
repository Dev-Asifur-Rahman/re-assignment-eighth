import React, { useEffect, useState } from 'react';
import { get_wishlist } from '../../Js_Folder/localstorage';
import WishListItems from './WishListItems';

const Wishlist = () => {
    const [WishLists,setWishlists] = useState([])
    const Get_WishList  = get_wishlist()
    useEffect(()=>{
        setWishlists(Get_WishList)
    },[])
    const error_item = <div className='font-bold text-3xl text-center'>
        No items added to Wishlist
    </div>
    return (
        <div className='my-2 flex flex-col gap-2'>
             {
               WishLists.length > 0 ? WishLists.map(item=><WishListItems item={item} key={item.product_id}></WishListItems>):error_item
            }
        </div>
    );
};

export default Wishlist;