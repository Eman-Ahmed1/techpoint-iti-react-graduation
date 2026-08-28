import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
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

                    <NavLink to="/wishlist">{({ isActive }) => (isActive ? <FaHeart /> : <FaRegHeart />)}</NavLink>
                    <NavLink to="/cart">{({ isActive }) => isActive ? <MdShoppingCart /> : <MdOutlineShoppingCart />}</NavLink >
                    <NavLink to="/login"><IoPersonAddOutline /></NavLink >


                </div>
            </div>
        </div>

    )
}