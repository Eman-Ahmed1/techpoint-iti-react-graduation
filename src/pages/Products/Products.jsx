import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import { getProducts } from "../../services/products"
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/Button/Button";
import './Products.css'
import Loading from "../../components/Loading/loading"

export default function Products() {
    const electronicsCategories = [
        "laptops",
        "smartphones",
        "tablets",
        "mobile-accessories"
    ];

    const [products, setProducts] = useState([])

    const [category, setCategory] = useState("all")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [rating, setRating] = useState("any")
    const [sort, setSort] = useState("featured")

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getProducts().then(data => {
            const electronicsProducts = data.filter(product => {
                return electronicsCategories.includes(product.category)
            })

            setProducts(electronicsProducts);
        })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
            setLoading(false)
        })
    }, [])

    const filterProducts = products.filter((product) => {
        return ((category === "all" || product.category === category)
            &&
            (minPrice === "" || product.price >= minPrice)
            &&
            (maxPrice === "" || product.price <= maxPrice)
            &&
            (rating === "any" || product.rating >= rating)
        )
    })

    const sortProducts = [...filterProducts];

    if (sort === "price-asc") {
        sortProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
        sortProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
        sortProducts.sort((a, b) => b.rating - a.rating);
    }

    return (
        <div className="productsPage">
            <div className="container">

                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <IoIosArrowForward />
                    <p>Products</p>
                </div>

                <div className="pageHeader">
                    <h1>Products</h1>
                    <p>Explore our collection of smartphones, laptops, tablets, and accessories engineered for precision.</p>
                </div>

                <div className="productsControls">
                    <div className="productsControlsLift">
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="all">All Products</option>
                            <option value="smartphones">smartphones</option>
                            <option value="laptops">laptops</option>
                            <option value="tablets">tablets</option>
                            <option value="mobile-accessories">Accessories</option>
                        </select>

                        <input type="number" placeholder="Min $"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)} />

                        <span>-</span>

                        <input type="number" placeholder="Max $" value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)} />

                        <select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option value="any">Any Rating</option>
                            <option value="4">4+ Stars</option>
                            <option value="3">3+ Stars</option>
                            <option value="2">2+ Stars</option>
                        </select>
                    </div>

                    <div className="productsControlsRight">
                        <p className="productsLength">{sortProducts.length} Products found</p>

                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price:Low to High</option>
                            <option value="price-desc">Price:High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
                {loading?( <Loading/>): (
                <div className="products">
                    {sortProducts.map(product => (
                        <div key={product.id} >
                            <Card product={product} />
                        </div>
                    ))}
                </div>

                )}
                <div className="loadMore">
                    <Button>LOAD MORE PRODUCTS</Button>
                </div>
            </div>
        </div>
    )
}