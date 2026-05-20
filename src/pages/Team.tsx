import { useState } from "react";

export default function Team() {

    const [activeModal, setActiveModal] = useState<string | null>(null);

    return (

        <section className="team-page">

            {/* HERO */}

            <div className="team-hero">

                <div className="container">

                    <span className="team-tag">
                        SAMPRO LEADERSHIP
                    </span>

                    <h1>
                        Meet Our Leadership Team
                    </h1>

                    <p>
                        Visionary leaders driving innovation,
                        transformation and enterprise excellence
                        across Africa, Asia and the Middle East.
                    </p>

                </div>

            </div>

            {/* TEAM GRID */}

            <div className="container">

                <div className="team-grid">

                    {/* CHAIRMAN */}

                    <div
                        className="team-card featured-card"
                        onClick={() => setActiveModal("chairman")}
                    >

                        <div className="team-card-header">
                            <span>Chairman</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                EC
                            </div>

                            <h2>Eric Chamchoum</h2>

                            <h4>SamPro Group</h4>

                            <p>
                                Entrepreneur, philanthropist,
                                visionary and technology leader.
                            </p>

                            <button className="view-btn">
                                View Profile
                            </button>

                        </div>

                    </div>

                    {/* CEO */}

                    <div
                        className="team-card"
                        onClick={() => setActiveModal("ceo")}
                    >

                        <div className="team-card-header dark-header">
                            <span>Group CEO</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                FF
                            </div>

                            <h2>Fayad K. Fayad</h2>

                            <h4>Group CEO</h4>

                            <p>
                                Strategic leader, consultant and
                                global business executive.
                            </p>

                            <button className="view-btn">
                                View Profile
                            </button>

                        </div>

                    </div>

                    {/* CTO */}

                    <div
                        className="team-card"
                        onClick={() => setActiveModal("cto")}
                    >

                        <div className="team-card-header">
                            <span>Chief Technology Officer</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                OA
                            </div>

                            <h2>Oluwabunmi Abiodun</h2>

                            <h4>CTO</h4>

                            <p>
                                Enterprise technology architect
                                and telecom transformation expert.
                            </p>

                            <button className="view-btn">
                                View Profile
                            </button>

                        </div>

                    </div>

                    {/* CMO */}

                    <div
                        className="team-card"
                        onClick={() => setActiveModal("cmo")}
                    >

                        <div className="team-card-header dark-header">
                            <span>Chief Marketing Officer</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                RF
                            </div>

                            <h2>Raouf Ben Ftima</h2>

                            <h4>CMO</h4>

                            <p>
                                Marketing strategist and business
                                development executive.
                            </p>

                            <button className="view-btn">
                                View Profile
                            </button>

                        </div>

                    </div>

                </div>

            </div>

         {/* ================= PREMIUM MODAL ================= */}

{activeModal && (

    <div
        className="modal-overlay"
        onClick={() => setActiveModal(null)}
    >

        <div
            className="profile-modal"
            onClick={(e) => e.stopPropagation()}
        >

            {/* CLOSE BUTTON */}

            <button
                className="close-modal"
                onClick={() => setActiveModal(null)}
            >
                ×
            </button>

            {/* =====================================================
                CHAIRMAN
            ===================================================== */}

            {activeModal === "chairman" && (

                <div>

                    <div className="modal-header">

                        <div className="modal-avatar">
                            EC
                        </div>

                        <div className="modal-header-content">

                            <span className="modal-role">
                                Chairman
                            </span>

                            <h2>
                                Eric Chamchoum
                            </h2>

                            <h4>
                                SamPro Group
                            </h4>

                        </div>

                    </div>

                    <div className="modal-divider"></div>

                    <div className="modal-content">

                        <p>
                            Eric Chamchoum, a renowned entrepreneur,
                            philanthropist, writer, lecturer, artist
                            and technology aficionado, was raised in
                            the vibrant landscapes of West Africa.
                        </p>

                        <p>
                            From an early age, it was evident that
                            Eric possessed an innate passion for
                            business and technology. As a teenager,
                            he honed his skills by building electronic
                            equipment from scrap and selling it,
                            immersing himself in the intricacies
                            of the industry.
                        </p>

                        <p>
                            Throughout his illustrious journey,
                            his innate artistic flair effortlessly
                            guided him towards the realm of car design
                            and the creation of acclaimed paintings.
                        </p>

                        <p>
                            Building upon these triumphs, he has now
                            embarked on his latest endeavor —
                            crafting an extraordinary collection of
                            exquisitely exclusive perfumes,
                            aptly named Al Jawaher.
                        </p>

                        <p>
                            He was educated in West Africa and
                            Switzerland. Seizing an opportunity to
                            grow both personally and professionally,
                            Eric journeyed to California, USA to
                            further pursue his studies and ambitions.
                        </p>

                        <p>
                            Years later and with his heart connected
                            to his West African roots, he was prompted
                            to return and dedicate himself to
                            addressing the challenges faced by Africans
                            in the realm of education.
                        </p>

                        <p>
                            His unwavering commitment to this cause
                            led him down the philanthropic path,
                            where he established numerous charitable
                            projects aimed at providing young
                            West Africans with access to education.
                        </p>

                        <p>
                            As the Chairman of SamPro Group,
                            a technology and telecom business
                            that has extended its reach across
                            several countries in Africa and Asia,
                            Eric continues to champion innovation
                            and progress.
                        </p>

                        <p>
                            Through his visionary leadership and
                            vast expertise, he has empowered
                            communities and transformed lives.
                        </p>

                        <blockquote>
                            “Education illuminates the path to
                            Africa’s future, guiding its economic
                            independence with precision and
                            proficiency.”
                        </blockquote>

                        {/* ================= FRENCH SECTION ================= */}

                        <div className="language-divider">
                            Français
                        </div>

                        <p>
                            Eric Chamchoum, entrepreneur,
                            philanthrope, écrivain, conférencier,
                            artiste et passionné de technologie
                            renommé, a grandi dans les paysages
                            vibrants de l’Afrique de l’Ouest.
                        </p>

                        <p>
                            Dès son plus jeune âge, il était évident
                            qu’Eric possédait une passion innée
                            pour les affaires et la technologie.
                        </p>

                        <p>
                            Son engagement indéfectible en faveur
                            de l’éducation l’a conduit sur la voie
                            de la philanthropie où il a lancé
                            plusieurs projets caritatifs visant
                            à permettre aux jeunes ouest-africains
                            d’accéder à l’éducation.
                        </p>

                        <p>
                            Grâce à son leadership visionnaire et
                            à sa vaste expertise, il continue de
                            promouvoir l’innovation, le progrès
                            et l’autonomisation des communautés.
                        </p>

                    </div>

                </div>

            )}

            {/* =====================================================
                CEO
            ===================================================== */}

            {activeModal === "ceo" && (

                <div>

                    <div className="modal-header">

                        <div className="modal-avatar">
                            FF
                        </div>

                        <div className="modal-header-content">

                            <span className="modal-role">
                                Group CEO
                            </span>

                            <h2>
                                Fayad K. Fayad
                            </h2>

                            <h4>
                                Group Managing Partner & CEO
                            </h4>

                        </div>

                    </div>

                    <div className="modal-divider"></div>

                    <div className="modal-content">

                        <p>
                            Husband, Father, Entrepreneur,
                            Group CEO, Africapitalist,
                            Believer & Visionary.
                        </p>

                        <p>
                            With a rich and diverse work history
                            in the Trade, Technology, ICT business,
                            regulation, and Government consultancy
                            sectors, Fayad Fayad brings a wealth
                            of experience to the table.
                        </p>

                        <p>
                            Having worked extensively in Africa,
                            Asia, the Gulf region, and the Middle East,
                            his deep understanding of the industry
                            enables him to navigate complex
                            service delivery landscapes.
                        </p>

                        <p>
                            Fayad is a highly experienced consultant
                            who has worked extensively with government
                            institutions in Africa.
                        </p>

                        <p>
                            His consultancy services encompass
                            telecom services, software development,
                            revenue assurance, regulations,
                            mergers & acquisitions,
                            infrastructural and environmental
                            regulations.
                        </p>

                        <p>
                            He sits on the Panel of Advisory and
                            Strategic Partner to the Nigerian Arab
                            Gulf Chamber of Commerce (NAGCC),
                            Vice Chairman of the Economic Advisory
                            board to the Commonwealth of Dominica
                            and Executive Board Member of Leaders
                            Without Borders Development Centre.
                        </p>

                        <blockquote>
                            A visionary leader passionate about
                            Africa’s transformation, innovation
                            and sustainable growth.
                        </blockquote>

                    </div>

                </div>

            )}

            {/* =====================================================
                CTO
            ===================================================== */}

            {activeModal === "cto" && (

                <div>

                    <div className="modal-header">

                        <div className="modal-avatar">
                            OA
                        </div>

                        <div className="modal-header-content">

                            <span className="modal-role">
                                Chief Technology Officer
                            </span>

                            <h2>
                                Oluwabunmi Abiodun
                            </h2>

                            <h4>
                                CTO
                            </h4>

                        </div>

                    </div>

                    <div className="modal-divider"></div>

                    <div className="modal-content">

                        <p>
                            Oluwabunmi Abiodun is a certified
                            consultant and member of world class
                            group with extensive experience applying
                            TMF standards.
                        </p>

                        <p>
                            He has successfully managed several
                            large business transformation projects
                            involving billing, fulfilment and
                            assurance systems.
                        </p>

                        <p>
                            Abiodun specializes in solution
                            architecture, customer experience,
                            telecom innovation and enterprise
                            digital transformation.
                        </p>

                        <p>
                            He helps CSPs and suppliers rapidly
                            transform business operations,
                            IT systems and ecosystems.
                        </p>

                        <p>
                            His expertise includes order management,
                            billing, fulfilment, assurance processes,
                            Omni-channel systems and big data-driven
                            decisions.
                        </p>

                    </div>

                </div>

            )}

            {/* =====================================================
                CMO
            ===================================================== */}

            {activeModal === "cmo" && (

                <div>

                    <div className="modal-header">

                        <div className="modal-avatar">
                            RF
                        </div>

                        <div className="modal-header-content">

                            <span className="modal-role">
                                Chief Marketing Officer
                            </span>

                            <h2>
                                Raouf Ben Ftima
                            </h2>

                            <h4>
                                CMO
                            </h4>

                        </div>

                    </div>

                    <div className="modal-divider"></div>

                    <div className="modal-content">

                        <p>
                            International background in the field
                            of Marketing management and business
                            development.
                        </p>

                        <p>
                            Graduated from University of Economics
                            Vienna, Austria and attended professional
                            development programs in Management &
                            Leadership at Cornell University,
                            New York, USA.
                        </p>

                        <p>
                            Joined SamPro Holding over 8 years ago
                            and has contributed significantly to its
                            growth across telecommunications,
                            IT and revenue assurance.
                        </p>

                        <p>
                            He continues to drive global marketing,
                            business positioning and enterprise
                            branding strategies for SamPro Group.
                        </p>

                        <blockquote>
                            “We strive to exceed expectations
                            by delivering secure, unique and
                            robust solutions.”
                        </blockquote>

                    </div>

                </div>

            )}

        </div>

    </div>

)}
        </section>
    );
}