function get_cart (){
    const Cart = localStorage.getItem('Cart')? JSON.parse(localStorage.getItem('Cart')) : []
}

const set_item_to_cart = (item) =>{
    const get_cart  = get_cart()
    console.log(get_cart)
}

export {get_cart,set_item_to_cart}