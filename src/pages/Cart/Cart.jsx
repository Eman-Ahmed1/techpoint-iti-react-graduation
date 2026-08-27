import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Cart.css"
import { getCart, remove, increase, decrease } from "../../utils/cart.js"
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";




export default function Cart() {

    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
        setProductsCart(getCart());
    }, [])


    const handleIncrease = (item) => {
        increase(item);
        setProductsCart(getCart());
    }

    const handleDecrease = (item) => {
        decrease(item);
        setProductsCart(getCart())
    }

    const handleRemove = (item) => {
        remove(item);
        setProductsCart(getCart())
    }

    const subtotal = productsCart.reduce((acc, item) => {   // acc = Accumulator 
        return acc + (item.price * item.quantity)

    }, 0);   //0 -> initial value

    const shipping = subtotal < 1000 && subtotal !== 0 ? 50 : 0;
    const discount = subtotal * 0.1;

    const total = subtotal + shipping - discount;

    return (
        <div className="cartPage">
            <div className="container">

                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <IoIosArrowForward />
                    <p>Cart</p>
                </div>

                <div className="header">
                    <h1>Shopping Cart</h1>
                    <p>({productsCart.length} items in your cart) </p>
                </div>

                <div className="mainSection">
                    <div className="products">
                        {productsCart.length === 0 && (
                            <div className="emptyCart">
                                <FaShoppingCart /> 
                                <h2> Your cart is empty</h2>
                                <Button to="/products">Continue Shopping </Button>
                            </div>
                        )}
                        {productsCart.map(item => {
                            return <div className="product" key={item.id}>
                                <div className="img">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>

                                <div className="info">
                                    <h3 className="title">{item.title}</h3>

                                    <p className="category">TechPoint {item.category}</p>

                                    <p className="itemRating">
                                        {"★".repeat(Math.floor(item.rating))}
                                        {"☆".repeat(5 - Math.floor(item.rating))}
                                    </p>

                                    <div className="infoCount">
                                        <div onClick={() => handleDecrease(item)} className="decreaseCount">-</div>
                                        <div>{item.quantity}</div>
                                        <div onClick={() => handleIncrease(item)} className="increaseCount">+</div>
                                    </div>
                                </div>

                                <div className="price-remove" >
                                    <h3>${item.price}</h3>

                                    <div className="remove" onClick={() => handleRemove(item)}>
                                        <RiDeleteBin6Line />
                                        <p>Remove</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="summary">
                        <div className="summaryHeader">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="summaryInfo">
                            <div>
                                <p>Subtotal</p>
                                <h5>{subtotal}</h5>
                            </div>
                            <div>
                                <p>Discount <span>SUMMER24</span></p>
                                <h5>{discount}</h5>
                            </div>
                            <div>
                                <p>Shipping</p>
                                <h5>{shipping}</h5>
                            </div>

                        </div>
                        <div className="total">
                            <div>
                                <h3>Total</h3>
                                <h2>{total}</h2>
                            </div>

                            <Button><p>Proceed to Checkout </p><FaArrowRight /> </Button>

                            <p className="summaryFooter">Secure checkout powered by TechPoint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}