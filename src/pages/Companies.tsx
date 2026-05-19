import icell from "../assets/icell.png";
import bell from "../assets/bell.jpg";
import brytel from "../assets/brytel.png";
import aljawaher from "../assets/Al Jawaher.png";
import acl from "../assets/logo-acl.jpg";

export default function Companies() {

    const companies = [
        {
            logo: acl,
            name: "Advanced Technology Development & Innovation (West Africa) Limited",
            desc: "Driving innovation, technology advancement and enterprise transformation across Africa.",
            tag: "Technology"
        },

        {
            logo: aljawaher,
            name: "DoBuyMall",
            desc: "Modern digital commerce and online retail solutions delivering seamless shopping experiences.",
            tag: "E-Commerce"
        },

        {
            logo: brytel,
            name: "Bryantel Technologies Limited",
            desc: "Enterprise telecommunications, connectivity and strategic technology solutions.",
            tag: "Telecommunications"
        },

        {
            logo: bell,
            name: "Bell International Limited",
            desc: "Global business services and innovative operational support solutions.",
            tag: "Business Services"
        },

        {
            logo: icell,
            name: "Innovative Cell Multimedia Limited",
            desc: "Advanced multimedia, digital communication and mobile technology services.",
            tag: "Multimedia"
        },

        {
            // logo: icell,
            name: "Vector Telecom Services Limited",
            desc: "Professional telecom infrastructure and communication management services.",
            tag: "Infrastructure"
        }
    ];

    return (

        <section className="companies-page">

            {/* HERO */}

            <div className="companies-hero">

                <div className="container">

                    <span className="companies-tag">
                        SAMPRO GROUP
                    </span>

                    <h1>
                        Our Companies
                    </h1>

                    <p>
                        SamPro Group consists of innovative companies delivering
                        excellence in technology, telecommunications, multimedia,
                        business development and strategic enterprise solutions.
                    </p>

                </div>

            </div>

            {/* GRID */}

            <div className="container">

                <div className="companies-grid">

                    {companies.map((company, index) => (

                        <div
                            className="company-card"
                            key={index}
                        >

                            <div className="company-logo-box">

                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="company-logo"
                                />

                            </div>

                            <div className="company-content">

                                <span className="company-badge">
                                    {company.tag}
                                </span>

                                <h3>
                                    {company.name}
                                </h3>

                                <p>
                                    {company.desc}
                                </p>

                                <button className="company-btn">
                                    Learn More
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}