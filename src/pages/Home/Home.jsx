import Button from "../../components/Button/Button";
import imgHero from "../../assets/images/imgHero.jpg";
import cat1 from "../../assets/images/cat1.jpg";
import cat2 from "../../assets/images/cat2.jpg";
import cat3 from "../../assets/images/cat3.jpg";
import cat4 from "../../assets/images/cat4.jpg";
import { PiDevices } from "react-icons/pi";
import { PiHandTap } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import './Home.css'
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Card from "../../components/Card/Card"
import { Link } from "react-router-dom";



export default function Home() {

    const [featuredProducts, setFeaturedProducts] = useState([]);

    const electronicsCategories = [
        "laptops",
        "smartphones",
        "tablets",
        "mobile-accessories"
    ];

    useEffect(() => {
        getProducts().then(data => {
            const electronicsProducts = data.filter((item) => {
                return electronicsCategories.includes(item.category)
            })

            const featured = [...electronicsProducts].sort((a, b) => b.rating - a.rating)
                .slice(0, 4);

            setFeaturedProducts(featured);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="homePage">
            <div className="container">
                {/* hero section */}
                <div className="heroSection">
                    <div className="heroText">
                        <h1>Find the tech that fits you.</h1>

                        <p>Explore smartphones, laptops, tablets, and more — all in one place.</p>

                        <div className="heroTextBTN">
                            <Button to="/products">Shop Products</Button>
                            
                            <Button  to="/findDevice">Find Your Device</Button>
                        </div>
                    </div>

                    <div className="heroImg">
                        <img src={imgHero} alt="" />
                    </div>
                </div>

                {/* Category */}
                <div className="homeCategory">
                    <p className="homeCategoryTitle">Shop by Category</p>
                    <p className="homeCategoryParg">Find the technology you need, all in one place</p>

                    <div className="category">
                        <div>
                            <Link to="/products?category=smartphones">
                                <img src={cat1} alt="" />
                                <p>Smartphones</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/products?category=laptops">
                                <img src={cat2} alt="" />
                                <p>Laptops</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/products?category=tablets">
                                <img src={cat3} alt="" />
                                <p>Tablets</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/products?category=mobile-accessories">
                                <img src={cat4} alt="" />
                                <p>Accessories</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Featured Products */}
                <div className="featuredProducts">
                    <h2>Featured Products</h2>
                    <p>Popular picks worth checking out.</p>

                    <div className="products">
                        {featuredProducts.map((product) => {
                            return <Card key={product.id} product={product} />

                        })}
                    </div>

                    <div className="viewAll">
                        <Button to="/products">View All Products</Button>
                    </div>
                </div>
            </div >
            {/* FindDevice */}
            < div className="findDevice" >
                <div className="container">
                    <div className="findDeviceText">
                        <h2>Not sure what to choose?</h2>
                        <p>Answer a few quick questions and we'll help you find the right device for your needs.</p>
                        <Button to="/findDevice">Find Your Device</Button>
                    </div>

                    <div className="findDeviceImg">
                        <img src={imgHero} alt="" />
                    </div>
                </div>
            </div >

            {/* Why TechPoint? */}
            < div className="whyTechPoint" >
                <div className="container">
                    <h2>Why TechPoint?</h2>

                    <div className="whyTechPointSec">
                        <div>
                            <p className="icon"><PiDevices /></p>
                            <h4>Wide Selection</h4>
                            <p className="des">Explore a variety of modern devices and accessories.</p>
                        </div>
                        <div>
                            <p className="icon"><PiHandTap /></p>
                            <h4>Easy Shopping</h4>
                            <p className="des">Find what you need with simple browsing and smart filtering</p>
                        </div>
                        <div>
                            <p className="icon"><AiOutlineSafetyCertificate /></p>
                            <h4>Trusted Products</h4>
                            <p className="des">Discover highly rated products from popular brands.</p>
                        </div>
                    </div>
                </div>
            </div >


            {/* homeBottom */}
            < div className="homeBottom" >
                <div className="container">
                    <h2>Ready to find your next device?</h2>
                    <p>Explore our collection and discover technology that fits your everyday life.</p>

                    <Button to="/products">Shop Products</Button>
                </div>
            </div >
        </div >


    )
}