export default function WhySamPro() {

    const values = [

        {
            icon: "🛡️",
            title: "Integrity",
            desc: "Our guiding principle is integrity. We value honesty, professionalism, confidentiality and hard work in every engagement with our clients and partners."
        },

        {
            icon: "🤝",
            title: "Long Term Partnership",
            desc: "We grow alongside our clients, supporting them from startup stage through expansion and new business challenges."
        },

        {
            icon: "⚡",
            title: "Flexibility",
            desc: "We adapt to your corporate culture and work closely with your team to maximize efficiency and deliver results."
        },

        {
            icon: "💰",
            title: "Cost Predictability",
            desc: "Even with limited budgets, we remain committed to delivering measurable returns on every investment."
        },

        {
            icon: "👨‍💼",
            title: "You Are In Good Hands",
            desc: "Our project teams consist of talented and experienced professionals dedicated to innovation and exceptional execution."
        },

        {
            icon: "🌍",
            title: "Industry Independence",
            desc: "Our services are relevant across industries and business sizes, especially in IT, Telecom and enterprise services."
        },

        {
            icon: "🚀",
            title: "Best of Breed Philosophy",
            desc: "We leverage modern technologies, strategies and techniques to ensure our clients stay ahead competitively."
        },

        {
            icon: "🌐",
            title: "Global & Local Expertise",
            desc: "We help foreign companies localize successfully and empower local companies to expand into international markets."
        }

    ];

    return (

        <section className="why-page">

            {/* HERO */}

            <div className="why-hero">

                <div className="container">

                    <span className="why-tag">
                        WHY SAMPRO
                    </span>

                    <h1>
                        Why Choose SamPro
                    </h1>

                    <p>
                        Delivering innovation, integrity and strategic excellence
                        through world-class business, technology and consulting solutions.
                    </p>

                </div>

            </div>

            {/* CONTENT */}

            <div className="container">

                <div className="why-intro">

                    <div className="why-intro-left">

                        <span className="mini-tag">
                            OUR ADVANTAGE
                        </span>

                        <h2>
                            You Are In Good Hands
                        </h2>

                        <p>
                            At SamPro Group, we combine innovation,
                            professionalism and strategic expertise to help
                            businesses grow, scale and thrive globally.
                        </p>

                    </div>

                    <div className="why-intro-right">

                        <div className="intro-box">
                            <h3>15+</h3>
                            <span>Years Experience</span>
                        </div>

                        <div className="intro-box">
                            <h3>Global</h3>
                            <span>Business Reach</span>
                        </div>

                        <div className="intro-box">
                            <h3>100%</h3>
                            <span>Client Commitment</span>
                        </div>

                    </div>

                </div>

                {/* GRID */}

                <div className="why-grid">

                    {values.map((item, index) => (

                        <div
                            className="why-card"
                            key={index}
                        >

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}