// get cart
export const getCart =() =>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
}

// add to cart
export const addToCart =(product) =>{
    const cart = getCart();

    const existingProduct = cart.find(item =>{
        return item.id === product.id;
    })

    if(existingProduct ){
        existingProduct.quantity += 1;
    }else {
        cart.push({
            ...product,
            quantity:1
        })
    }
    localStorage.setItem("cart",JSON.stringify(cart))

}

// remove product
export const remove = (product) =>{
    const cart = getCart();

    const updatedCart = cart.filter(item =>{
        return item.id !== product.id;
    })

    localStorage.setItem("cart" , JSON.stringify(updatedCart))
}

// increase
export const increase = (product) =>{
    const cart = getCart();

    const targetProduct = cart.find(item => item.id === product.id)

    if(targetProduct){
        targetProduct.quantity += 1 ;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

// decrease
export const decrease = (product) =>{
    const cart = getCart();

    const targetProduct= cart.find(item => item.id === product.id);

    if(!targetProduct) return ;

        if(targetProduct.quantity > 1){
            targetProduct.quantity -= 1;
        }

        localStorage.setItem ("cart",JSON.stringify(cart))
    
}