import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { getProducts } from "../../services/products";
import Card from "../../components/Card/Card";
import "./FindDevice.css"
import { MdPhoneIphone } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";


export default function FindDevice() {
    const electronicsCategories = [
        "laptops",
        "smartphones",
        "tablets",
        "mobile-accessories"
    ];

    const [products, setProducts] = useState([])
    const [deviceType, setDeviceType] = useState("");
    const [budget, setBudget] = useState("");
    const [priority, setPriority] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        getProducts().then(data => {
            const filterProducts = data.filter(product => {
                return (electronicsCategories.includes(product.category))
            })
            setProducts(filterProducts);
        }).catch(err => {
            console.log(err);

        })
    }, [])

    const findDevices = () => {
        let result = products.filter(item => {
            return item.category === deviceType;
        })

        result = result.filter(item => {
            if (budget === "under300") {
                return item.price <= 300;
            }
            if (budget === "300-700") {
                return item.price >= 300 && item.price <= 700;

            }
            if (budget === "700-1200") {
                return item.price >= 700 && item.price <= 1200;
            }
            if (budget === "+1200") {
                return item.price >= 1200;
            }

        })
        setRecommendations(result);
        setHasSearched(true);
    }

    return (
        <div className="find-device">
            <div className="container">

                <div className="header">
                    <h1>Find Your Device</h1>
                    <p>Not sure what to buy? Answer a few questions and we'll help you find the right device.</p>
                </div>

                <div className="mainSection">
                    <div className="questions1">
                        <h3>1. What are you looking for?</h3>
                        <div className="ques1" >
                            <div onClick={() => setDeviceType("smartphones")}
                                className={deviceType === "smartphones" ? "active" : ""}>
                                <div className="icon"><MdPhoneIphone /></div>
                                <p>Smartphone</p>
                            </div>
                            <div onClick={() => setDeviceType("laptops")}
                                className={deviceType === "laptops" ? "active" : ""}>
                                <div className="icon"><MdOutlineLaptopMac /></div>
                                <p>Laptop</p>
                            </div>
                            <div onClick={() => setDeviceType("tablets")}
                                className={deviceType === "tablets" ? "active" : ""}>
                                <div className="icon"><FaTabletAlt /></div>
                                <p>Tablet</p>
                            </div>
                            <div onClick={() => setDeviceType("mobile-accessories")}
                                className={deviceType === "mobile-accessories" ? "active" : ""}>
                                <div className="icon"><FaHeadphones /></div>
                                <p>Accessories</p>
                            </div>
                        </div>

                    </div>

                    <div className="questions2">
                        <h3>2. What's your budget?</h3>
                        <div className="ques1">
                            <div onClick={() => setBudget("under300")}
                                className={budget === "under300" ? "active" : ""}>
                                <p>Under $300</p>
                            </div>
                            <div onClick={() => setBudget("300-700")}
                                className={budget === "300-700" ? "active" : ""}>
                                <p>$300 - $700</p>
                            </div>
                            <div onClick={() => setBudget("700-1200")}
                                className={budget === "700-1200" ? "active" : ""}>
                                <p>$700 - $1200</p>
                            </div>
                            <div onClick={() => setBudget("+1200")}
                                className={budget === "+1200" ? "active" : ""}>
                                <p>$1200+</p>
                            </div>
                        </div>

                    </div>

                    <div className="questions3">
                        <h3>3. What's most important to you?</h3>

                        <div className="ques1">
                            <div onClick={() => setPriority("performance")}
                                className={priority === "performance" ? "active" : ""}>
                                <FaCheckCircle />
                                <p>Performance</p>
                            </div>
                            <div onClick={() => setPriority("portability")}
                                className={priority === "portability" ? "active" : ""}>
                                <GiAirplaneDeparture />
                                <p>Portability</p>
                            </div>
                            <div onClick={() => setPriority("bestValue")}
                                className={priority === "bestValue" ? "active" : ""}>
                                <CiBadgeDollar />
                                <p>Best Value</p>
                            </div>
                        </div>

                    </div>

                    {(!deviceType || !budget || !priority) &&
                        <p className="mass">Please complete the questions above to get personalized recommendations.</p>}

                    <div className="divBtn">
                        <button disabled={!deviceType || !budget || !priority}
                            onClick={findDevices} className="btn">Find MY Device</button>
                    </div>
                </div>

                <div className="recommendations">
                    {recommendations.length > 0 &&
                        <div className="header" >
                            <h2>Your Recommendations</h2>
                            <p>Based on your preferences, we found these products for you.</p>
                        </div>
                    }

                    <div className="filterProducts">
                        {recommendations.map(product => {
                            return <Card key={product.id} product={product} />
                        })}
                    </div>

                    {hasSearched && recommendations.length === 0 &&
                        <div className="noResults">
                            <h2>No matching devices found</h2>
                            <p>
                                We couldn't find any devices that match your preferences.
                                Try changing your budget or device type.
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}