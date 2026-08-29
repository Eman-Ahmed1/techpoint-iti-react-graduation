import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Login.css"
import { login } from "../../utils/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(email, password);

        if (success) {
            alert("Login successful");
            navigate("/");
        } else {
            alert("Invalid email or password");
        }
    }
    return (
        <div className="login">
            <div className="title">
                <Link to="/">TechPoint</Link>
            </div>

            <div className="loginCard">
                <h2>Welcome Back</h2>

                <p className="desc">Sign in to your TechPoint account</p>

                <form onSubmit={handleSubmit}>

                    <div className="formGroup">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" placeholder="invalid-email@" required id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <p className="warning">Please enter a valid email address</p>
                    </div>

                    <div className="formGroup">
                        <div className="passwordLabel">
                            <label htmlFor="password">Password</label>
                            <Link to="/forgotPassword">Forgot Password</Link>
                        </div>
                        <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <Button type="submit">Sign In</Button>
                </form>

                <p className="formFooter">Don't have an account? <Link to="/signup">Create Account</Link></p>
            </div>
        </div>
    )
}