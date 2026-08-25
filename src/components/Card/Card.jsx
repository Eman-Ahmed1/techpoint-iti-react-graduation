import { CiHeart } from "react-icons/ci";
import Button from "../Button/Button";
import './Card.css'

export default function Card({ product }) {
    return (

        <div className="card">

            <div className="card-image">

                <div className="heart">
                    <CiHeart />
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

                <div className="priceAndBtn">
                    <span className="itemPrice">${product.price}</span>
                    <Button >ADD</Button>
                </div>
            </div>
        </div>


    )
}