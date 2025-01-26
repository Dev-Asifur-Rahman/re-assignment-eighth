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
    const Wishlist  = get_wishlist()
    Wishlist.push(item)
    const Stringify_Wishlist = JSON.stringify(Wishlist)
    localStorage.setItem('Wishlist',Stringify_Wishlist)
}

function clear_cart (){
    localStorage.removeItem('Cart')
}

export {get_cart,set_item_to_cart,get_wishlist,set_item_to_wishlist,clear_cart}