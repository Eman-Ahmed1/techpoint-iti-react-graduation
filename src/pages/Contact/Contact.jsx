import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoIosArrowForward } from "react-icons/io";
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Contact() {

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Thank you for your message!");
        e.target.reset(); 
    }
    return (
        <div className="contact">
            <div className="container">
                {/* contact Top */}
                <div className="contactTop">

                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <IoIosArrowForward />
                        <p>Contact</p>
                    </div>


                    <div className="pageHeader">
                        <h1>Contact Us</h1>
                        <p>Have a question? We're here to help.</p>
                    </div>

                </div>

                {/* contact left */}
                <div className="contactBody">
                    <div className="contactInfo">

                        <h2 className="infoTitle">Get in Touch</h2>
                        <p className="infoDes">Our team is here to help with questions about products, orders, and your TechPoint experience.</p>

                        <div className="contactItem ">
                            <div className="contactInfoIcon">
                                <MdOutlineEmail />
                            </div>
                            <div className="detailText">
                                <h3>Email</h3>
                                <p>support@techpoint.com</p>
                            </div>
                        </div>

                        <div className="contactItem ">
                            <div className="contactInfoIcon">
                                <IoCall />
                            </div>
                            <div className="detailText">
                                <h3>Phone</h3>
                                <p>+1 (800) 123-4567</p>
                            </div>
                        </div>

                        <div className="contactItem ">
                            <div className="contactInfoIcon">
                                <MdOutlineLocationOn />
                            </div>
                            <div className="detailText">
                                <h3>Address</h3>
                                <p>123 Tech Street</p>
                                <p>New York, NY 10001</p>
                            </div>
                        </div>
                    </div>


                    {/* form */}
                    <div className="contactFormContainer">
                        <form onSubmit={handleSubmit}>
                            <h2 className="formTitle">Send us a message</h2>

                            <div className="formRow">
                                <div className="formGroup">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" placeholder="Your full name" id="name" name="name" required/>
                                </div>

                                <div className="formGroup">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder="your@email.com" id="email" name="email" required/>
                                </div>
                            </div>

                            <div className="formGroup">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" placeholder="What is this regarding?" id="subject" name="subject" />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="How can we help you?" name="message" required/>
                            </div>

                            <Button type="submit">Send Message</Button>
                    
                </form>
            </div>


        </div>
            </div >
        </div >
    )
}