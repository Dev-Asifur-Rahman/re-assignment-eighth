function get_cart (){
    return localStorage.getItem('Cart')? JSON.parse(localStorage.getItem('Cart')) : []
}

const set_item_to_cart = (item) =>{
    const Cart  = get_cart()
    Cart.push(item)
    const Stringify_Cart = JSON.stringify(Cart)
    localStorage.setItem('Cart',Stringify_Cart)
}

const get_wishlist = () =>{
    return localStorage.getItem('Wishlist')? JSON.parse(localStorage.getItem('Wishlist')) : []
}

const set_item_to_wishlist = (item) =>{
    const get_wishlist  = get_wishlist()
    console.log(get_wishlist)
}

function clear_cart (){
    localStorage.removeItem('Cart')
}

export {get_cart,set_item_to_cart,get_wishlist,set_item_to_wishlist,clear_cart}