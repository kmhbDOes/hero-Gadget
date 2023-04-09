//  Add data to local storage

const addTODb = id => {
    let shoppingcart = {}

    //Get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart', id)
    if (storedCart) {
        shoppingcart = JSON.parse(storedCart);
    }

    //Add quantity

    const quantity = shoppingcart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingcart[id] = newQuantity
    }
    else {
        shoppingcart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingcart));


}

export { addTODb }