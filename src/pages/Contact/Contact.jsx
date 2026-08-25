import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactTop">
                <div>
                    <Link to="/">Home </Link>
                    <p>contact</p>
                </div>


                <h1>Contact Us</h1>
                <p>Have a question? We're here to help.</p>
            </div>
            <div className="contactBottom">
                <div>
                    <h2>Get in Touch</h2>
                    <p>Our team is here to help with questions about products, orders, and your TechPoint experience.</p>

                    <div>
                        icons

                        <div>
                            <h3>Email</h3>
                            <p>support@techpoint.com</p>
                        </div>
                    </div>

                    <div>
                        icons

                        <div>
                            <h3>Phone</h3>
                            <p>+1 (800) 123-4567</p>
                        </div>
                    </div>

                    <div>
                        icons

                        <div>
                            <h3>Address</h3>
                            <p>123 Tech Street</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>
                </div>

                <div className="contactForm">

                    <form>
                        <h2>Send us a message</h2>

                        <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Your full name" />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="your@email.com" />
                        </div>

                        <label htmlFor="">Subject</label>
                        <input type="text" placeholder="What is this regarding?" />

                        <label htmlFor="">Message</label>
                        <textarea placeholder="How can we help you?" />

                        <Button type="submit">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}