import logo from "../assets/sampro-logo.png";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-container">

                {/* COMPANY INFO */}
                <div className="footer-box company-box">

                    <img
                        src={logo}
                        alt="SamPro"
                        className="footer-logo"
                    />

                    <p>
                        SamPro Holding Limited delivers innovative business,
                        technology and strategic solutions globally.
                    </p>

                    <div className="socials">

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

                {/* LINKS */}
                <div className="footer-box">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/companies">Companies</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                </div>

                {/* SERVICES */}
                <div className="footer-box">

                    <h3>Services</h3>

                    <ul>
                        <li>Telecommunications</li>
                        <li>IT Solutions</li>
                        <li>Revenue Assurance</li>
                        <li>Business Development</li>
                    </ul>

                </div>

                {/* CONTACT */}
                <div className="footer-box">

                    <h3>Contact</h3>

                    <ul className="contact-info">
                        <li>info@sampro.com</li>
                        <li>+234 800 000 0000</li>
                        <li>Lagos, Nigeria</li>
                    </ul>

                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">

                <div className="container footer-bottom-content">

                    <p>
                        © 2026 SamPro Holding Limited
                    </p>

                    <span>
                        Designed with Excellence
                    </span>

                </div>

            </div>

        </footer>
    );
}