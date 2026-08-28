// get wishlist
export const getWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlist;
}
// add item
export const toggleWishlist = (item) => {
    const wishlist = getWishlist();

    const existingProduct = wishlist.find((product) => {return item.id === product.id })

    if (existingProduct) {
        const updatedWishlist = wishlist.filter((product) => {return item.id !== product.id })

        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
    }
    else {
        wishlist.push(item);
        localStorage.setItem("wishlist", JSON.stringify(wishlist))

    }

}