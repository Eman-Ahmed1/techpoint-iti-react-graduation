import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-brand">
                    <h3>TechPoint</h3>

                    <p className="copyright">
                        © 2026 TechPoint. All rights reserved.
                        Precision engineering for the modern professional.
                    </p>
                </div>

                <div className="company">
                    <p>Company</p>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/findDevice">Find Your Device</Link>
                </div>
                <div className="customer">
                    <p>Customer</p>
                    <Link to="/login">Login</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <div className="support">
                    <p>Support</p>
                    <Link to="/contact">Contact</Link>
                    <Link to="/FAQ">FAQ</Link>
                    <Link to="/support">Support</Link>
                </div>
            </div>
        </div>
    )
}