import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { GoXCircle } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products"
import Button from "../../components/Button/Button";
import './ProductDetails.css'
import { addToCart } from "../../utils/cart"


export default function ProductDetails() {
    const electronicsCategories = [
        "laptops",
        "smartphones",
        "tablets",
        "mobile-accessories"
    ];

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [count, setCount] = useState(1);
    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        getProducts().then(data => {
            const electronicsProducts = data.filter(item =>
                electronicsCategories.includes(item.category)
            );

            const targetProduct = electronicsProducts.find(product => {
                return product.id === Number(id)
            })
            if (!targetProduct) {
                setProduct(null);
                setRelatedProducts([]);
                return;
            }
            setProduct(targetProduct);
            setSelectedImage(targetProduct.thumbnail);

            const relatedProducts = electronicsProducts.filter(item =>
                item.id !== targetProduct.id && item.category === targetProduct.category
            ).slice(0, 4);
            setRelatedProducts(relatedProducts);
        })
    }, [id])



    const increaseCount = () => {
        if (count < product.stock) {
            setCount(count + 1);
        };

    }
    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        };
    }

    if (!product) {
        return <p>Loading...</p>;
    }
    return (
        <div className="productDetails">
            <div className="container">

                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <IoIosArrowForward />
                    <Link to="/products">Products</Link>
                    <IoIosArrowForward />
                    <p>{product.title}</p>
                </div>

                <div className="sectionMain">
                    <div className="productImages">
                        <div className="mainimg">
                            <img src={selectedImage} alt={product.title} onClick={() => setSelectedImage(product.thumbnail)} />
                        </div>

                        <div className="images">
                            {product.images.map((img , index) =>{
                               return <img key={index} src={img} alt={product.title}  onClick={() => setSelectedImage(img)} />
                            })}
                        </div>
                    </div>

                    <div className="productInfo">
                        <p className="infoLogo">TECHPOINT</p>

                        <h1 className="infoTitle">{product.title}</h1>

                        <p className="infoRating">
                            <span>{"★".repeat(Math.floor(product.rating))}
                                {"☆".repeat(5 - Math.floor(product.rating))}
                            </span>
                            {product.rating}
                        </p>

                        <p className="infoPrice">$ {product.price}</p>

                        <p className="infoDesc">{product.description}</p>

                        <div className={product.stock > 0 ? "infoIsAvailable" : "infoNotAvailable"}>
                            {product.stock > 0 ? <p> <CiCircleCheck /> in Stock</p> : <p><GoXCircle /> out of Stock</p>}
                        </div>

                        <div className="infoActions">
                            <div className="infoCount">
                                <div onClick={decreaseCount} className="decreaseCount">-</div>
                                <div>{count}</div>
                                <div onClick={increaseCount} className="increaseCount">+</div>
                            </div>


                            <div className="btnAdd">
                                <Button onClick={() => addToCart(product)}><AiOutlineShopping />ADD TO CART</Button>
                            </div>

                            <div className="btnWishlist">
                                <Button><CiHeart /></Button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="sectionDetails">
                    <h4>Product Details</h4>

                    <p>{product.description}</p>
                </div>

                <div className="mayAlsoLike">
                    <h4>You May Also Like</h4>
                    <div className="products">
                        {relatedProducts.map(item => {
                            return <Card key={item.id} product={item} />

                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}