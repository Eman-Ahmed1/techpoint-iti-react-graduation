import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import './Navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <Link to="/" ><h1 className="navbar-logo">TechPoint</h1></Link>

                <form action="/search" className="navbarSearch" >
                    <button type="submit" aria-label="Search"><FaSearch /></button>
                    <input type="search" placeholder="Search products..." />
                </form>

                <nav>
                    <ul>
                        <li><NavLink to="/" >Home</NavLink> </li>
                        <li><NavLink to="/products">Products</NavLink> </li>
                        <li><NavLink to="/findDevice">Find Your Device</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink> </li>
                    </ul>
                </nav>

                <div className="iconsNav">

                    <Link to="/wishlist"> <FaRegHeart /></Link>
                    <Link to="/cart"><MdOutlineShoppingCart /></Link>
                    <Link to="/login"><IoMdPersonAdd /></Link>


                </div>
            </div>
        </div>
        
    )
}