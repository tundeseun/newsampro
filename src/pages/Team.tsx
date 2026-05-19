export default function Team() {
    return (
        <section className="team-page">

            {/* HERO */}

            <div className="team-hero">

                <div className="container">

                    <span className="team-tag">
                        SAMPRO LEADERSHIP
                    </span>

                    <h1>
                        About Our Team
                    </h1>

                    <p>
                        Meet the visionary leaders and professionals driving
                        innovation, technology and strategic growth across SamPro Group.
                    </p>

                </div>

            </div>

            {/* TEAM GRID */}

            <div className="container">

                <div className="team-grid">

                    {/* CHAIRMAN */}

                    <div className="team-card featured-card">

                        <div className="team-card-header">
                            <span>Chairman</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                EC
                            </div>

                            <h2>
                                Eric Chamchoum
                            </h2>

                            <h4>
                                SamPro Group
                            </h4>

                            <p>
                                Renowned entrepreneur, philanthropist, writer,
                                lecturer, artist and technology aficionado with
                                extensive experience across Africa and Asia.
                            </p>

                            <div className="team-highlights">

                                <span>Technology</span>
                                <span>Leadership</span>
                                <span>Philanthropy</span>
                                <span>Innovation</span>

                            </div>

                        </div>

                    </div>

                    {/* CEO */}

                    <div className="team-card">

                        <div className="team-card-header dark-header">
                            <span>Chief Executive Officer</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                CEO
                            </div>

                            <h2>
                                Executive Leadership
                            </h2>

                            <p>
                                Driving corporate strategy, innovation,
                                operational excellence and sustainable growth.
                            </p>

                        </div>

                    </div>

                    {/* CTO */}

                    <div className="team-card">

                        <div className="team-card-header">
                            <span>Chief Technology Officer</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                CTO
                            </div>

                            <h2>
                                Technology & Innovation
                            </h2>

                            <p>
                                Leading enterprise technology, digital
                                transformation and advanced software solutions.
                            </p>

                        </div>

                    </div>

                    {/* CMO */}

                    <div className="team-card">

                        <div className="team-card-header dark-header">
                            <span>Chief Marketing Officer</span>
                        </div>

                        <div className="team-card-body">

                            <div className="team-avatar">
                                CMO
                            </div>

                            <h2>
                                Marketing & Branding
                            </h2>

                            <p>
                                Delivering impactful marketing strategies,
                                brand positioning and global communications.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* CHAIRMAN PROFILE */}

            <section className="chairman-profile">

                <div className="container">

                    <div className="profile-header">

                        <span className="team-tag">
                            LEADERSHIP PROFILE
                        </span>

                        <h2>
                            Our Chairman
                        </h2>

                    </div>

                    <div className="profile-content">

                        <div className="profile-image">

                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200"
                                alt="Eric Chamchoum"
                            />

                        </div>

                        <div className="profile-text">

                            <h3>
                                Eric Chamchoum
                            </h3>

                            <h4>
                                Chairman — SamPro Group
                            </h4>

                            <p>
                                Eric Chamchoum is a renowned entrepreneur,
                                philanthropist, writer, lecturer, artist and
                                technology enthusiast raised in West Africa.
                            </p>

                            <p>
                                From an early age, he demonstrated exceptional
                                passion for technology and business, building
                                electronic equipment from scrap materials and
                                immersing himself in innovation and enterprise.
                            </p>

                            <p>
                                Through his visionary leadership, SamPro Group
                                has expanded its reach across Africa and Asia,
                                delivering excellence in technology,
                                telecommunications and strategic business services.
                            </p>

                            <p>
                                His dedication to education, philanthropy and
                                African development continues to inspire positive
                                transformation and sustainable growth globally.
                            </p>

                            <blockquote>
                                “Education illuminates the path to Africa’s future,
                                guiding its economic independence with precision
                                and proficiency.”
                            </blockquote>

                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
}