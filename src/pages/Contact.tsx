export default function Contact() {

    return (

        <section className="contact-page">

            {/* HERO */}

            <div className="contact-hero">

                <div className="container">

                    <span className="contact-tag">
                        CONTACT SAMPRO
                    </span>

                    <h1>
                        Let’s Build Something Great Together
                    </h1>

                    <p>
                        We’re always ready to discuss innovative ideas,
                        strategic partnerships and business opportunities globally.
                    </p>

                </div>

            </div>

            {/* CONTACT CONTENT */}

            <div className="container">

                <div className="contact-grid">

                    {/* LEFT */}

                    <div className="contact-info-card">

                        <span className="mini-tag">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Contact Information
                        </h2>

                        <p>
                            Reach out to SamPro Group for business inquiries,
                            partnerships, consulting services and enterprise solutions.
                        </p>

                        <div className="contact-items">

                            {/* <div className="contact-item"> */}

                                {/* <div className="contact-icon">
                                    📧
                                </div> */}

                                {/* <div>
                                    <h4>Email Address</h4>
                                    <span>info@sam-pro.com</span>
                                </div> */}

                            {/* </div> */}

                            {/* <div className="contact-item"> */}

                                {/* <div className="contact-icon">
                                    📞
                                </div>

                                <div>
                                    <h4>Phone Number</h4>
                                    <span>+234 800 000 0000</span>
                                </div> */}

                            {/* </div> */}

                            {/* <div className="contact-item"> */}

                                {/* <div className="contact-icon">
                                    📍
                                </div>

                                <div>
                                    <h4>Office Address</h4>
                                    <span>Lagos, Nigeria</span>
                                </div> */}

                            {/* </div> */}

                            <div className="contact-item">

                                <div className="contact-icon">
                                    🌍
                                </div>

                                <div>
                                    <h4>Business Reach</h4>
                                    <span>Africa • Asia • Global Markets</span>
                                </div>

                            </div>

                        </div>

                        {/* SOCIALS */}

                        <div className="contact-socials">

                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="contact-form-card">

                        <span className="mini-tag">
                            SEND MESSAGE
                        </span>

                        <h2>
                            Contact Us
                        </h2>

                        <form className="contact-form">

                            <div className="form-row">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                />

                            </div>

                            <div className="form-row">

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                />

                            </div>

                            <textarea
                                rows={6}
                                placeholder="Tell us about your project or inquiry..."
                            ></textarea>

                            <button type="submit">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}