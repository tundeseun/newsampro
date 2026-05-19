export default function Home() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}

            <section className="hero">
                <div className="container hero-container">

                    <div className="hero-left">
                        <span className="hero-tag">
                            SamPro Holding Limited
                        </span>

                        <h1>
                            Better Strategy With
                            <span> Quality Business</span>
                        </h1>

                        <p>
                            SamPro Holding Limited has brought to life a group of
                            leading companies, service providers and consultants
                            through partnerships and innovative business solutions
                            worldwide.
                        </p>

                        <div className="hero-buttons">
                            <a className="btn-primary">
                                Explore Companies
                            </a>

                            <a className="btn-secondary">
                                About Us
                            </a>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img
                            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400"
                            alt="Business Team"
                        />
                    </div>

                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}

            <section className="about-section">
                <div className="container about-grid">

                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400"
                            alt="Professional Team"
                        />
                    </div>

                    <div className="about-content">

                        <span className="section-tag">
                            WHY SAMPRO
                        </span>

                        <h2>
                            You Are In Good Hands
                        </h2>

                        <p>
                            Our hand-picked project teams are a blend of
                            talented and experienced professionals dedicated
                            to delivering exceptional results across all sectors.
                        </p>

                        <p>
                            We combine strategic planning, innovation,
                            technology and industry expertise to help businesses
                            grow successfully.
                        </p>

                        <a className="btn-primary">
                            About Us
                        </a>

                    </div>

                </div>
            </section>

         {/* ================= STRENGTH SECTION ================= */}

<section className="strength-section">

    <div className="container">

        <div className="section-header">

            <span className="section-tag">
                OUR EXPERTISE
            </span>

            <h2>
                Our Strength
            </h2>

            <p>
                Delivering excellence across multiple industries through
                innovation, technology and strategic partnerships.
            </p>

        </div>

        <div className="strength-grid">

            {/* CARD 1 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                        alt="Telecommunications"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        📡
                    </div>

                    <h3>Telecommunications</h3>

                    <p>
                        Advanced telecom infrastructure, connectivity and
                        digital communication solutions for enterprises.
                    </p>

                </div>

            </div>

            {/* CARD 2 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
                        alt="Information Technology"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        💻
                    </div>

                    <h3>IT & Digital Solutions</h3>

                    <p>
                        Enterprise software, AI solutions, automation and
                        digital transformation services globally.
                    </p>

                </div>

            </div>

            {/* CARD 3 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                        alt="Revenue Assurance"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        📊
                    </div>

                    <h3>Revenue Assurance</h3>

                    <p>
                        Strategic consulting, analytics and operational
                        efficiency management for businesses.
                    </p>

                </div>

            </div>

            {/* CARD 4 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200"
                        alt="Regulations"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        ⚖️
                    </div>

                    <h3>Regulatory Services</h3>

                    <p>
                        Governance, compliance advisory and regulatory
                        support tailored for modern enterprises.
                    </p>

                </div>

            </div>

            {/* CARD 5 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1573497491765-55d7f0f0c9f0?q=80&w=1200"
                        alt="Business Development"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        🚀
                    </div>

                    <h3>Business Development</h3>

                    <p>
                        Strategic partnerships, market expansion and
                        sustainable business growth solutions.
                    </p>

                </div>

            </div>

            {/* CARD 6 */}

            <div className="strength-card">

                <div className="strength-image">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200"
                        alt="Consulting"
                    />

                    <div className="strength-overlay"></div>
                </div>

                <div className="strength-content">

                    <div className="strength-icon">
                        🤝
                    </div>

                    <h3>Strategic Consulting</h3>

                    <p>
                        Professional advisory services helping organizations
                        scale with confidence and innovation.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
        </>
    );
}

