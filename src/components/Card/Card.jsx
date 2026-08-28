import { CiHeart } from "react-icons/ci";
import Button from "../Button/Button";
import './Card.css'
import { Link } from "react-router-dom";
import { addToCart } from "../../utils/cart"
import { getWishlist } from "../../utils/wishlist"
import { toggleWishlist } from "../../utils/wishlist.js"
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Card({ product }) {
    const [isWishlisted, setIsWishlisted] = useState(()=>{
        const wishlist = getWishlist();
        return wishlist.some((item) =>{
            return item.id === product.id
        })
    });

    return (

        <div className="card">
            <Link to={`/products/${product.id}`} >

                <div className="card-image">

                    <div className="heart" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                        setIsWishlisted(!isWishlisted);
                    }}>
                        {isWishlisted?<FaHeart/> :<CiHeart/>}
                    </div>

                    <img src={product.thumbnail} alt={product.title} />
                </div>

                <div className="card-content">
                    <p className="itemCategory">{product.category}</p>

                    <h3 className="itemTitle">{product.title}</h3>

                    <p className="itemRating">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                    </p>

                </div>

            </Link>

            <div className="priceAndBtn">
                <span className="itemPrice">${product.price}</span>
                <Button onClick={() => addToCart(product)}>ADD</Button>
            </div>

        </div >

    )
}