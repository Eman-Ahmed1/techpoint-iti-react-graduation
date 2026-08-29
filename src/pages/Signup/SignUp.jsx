import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./SignUp.css"
import { useState } from "react";
import { register } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return
        }

        const user = {
            firstName,
            lastName,
            email,
            password,
        }
        register(user);
        navigate("/");
    }

    return (
        <div>
            <div className="singUp">
                <div className="title">
                    <Link to="/">TechPoint</Link>
                </div>

                <div className="singUpCard">
                    <h2>Create Your Account</h2>
                    <p className="desc">Join TechPoint today</p>

                    <form onSubmit={handleSubmit}>

                        <div className="name">
                            <div className="formGroup">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder="jane" required id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" placeholder="Doe" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" placeholder="jane@example" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p className="warning">Please enter a valid email address</p>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="password" required id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" required id="confirmPassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                            {confirmPassword && password !== confirmPassword &&
                                <p className="warning">Passwords do not match</p>}
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" required id="checkbox" />
                            <label htmlFor="checkbox"> I agree to the <Link >Terms of Service</Link> and <Link>Privacy Policy.</Link></label>
                        </div>

                        <Button type="submit">Create Account</Button>
                    </form>

                    <p className="formFooter">Already have an account? <Link to="/login" >Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}