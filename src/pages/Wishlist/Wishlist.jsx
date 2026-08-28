import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Wishlist.css"
import { useEffect, useState } from "react";
import { getWishlist } from "../../utils/wishlist.js"
import Card from "../../components/Card/Card.jsx"

export default function Wishlist() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getWishlist());
    }, [])
    return (
        <div className="wishlist">
            <div className="container">

                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <IoIosArrowForward />
                    <p>Wishlist</p>
                </div>

                <div className="wishlist-header">
                    <h1>My Wishlist</h1>
                    <p> {products.length} items saved </p>
                </div>

                <div className="products">
                    {products.map((product) => {
                    return <Card key={product.id} product={product} />
                })}
                </div>
            </div>
        </div>
    )
}