import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { MdOutlineHome } from "react-icons/md";
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="notFound">

            <Link to="/" className="notFoundLogo">TechPoint</Link>

            <div className="notFoundCard">
                <h1 className="notFound404">404</h1>

                <h3>Page Not Found</h3>

                <p>The page you're looking for doesn't exist or may have been moved.</p>

                <Link to="/" className="btn">
                    <Button > <MdOutlineHome /> Back to Home </Button>
                </Link>
            </div>
        </div>
    )
}