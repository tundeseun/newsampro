import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sampro-logo.png";

export default function Navbar() {

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="container nav-wrapper">

				{/* LOGO */}
				<div className="logo-box">
					<img
						src={logo}
						className="logo"
						alt="SamPro Logo"
					/>
				</div>

				{/* MOBILE MENU BUTTON */}
				<div
					className={`menu-toggle ${menuOpen ? "active" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				{/* MENU */}
				<div className={`menu ${menuOpen ? "active" : ""}`}>

					<Link to="/" onClick={() => setMenuOpen(false)}>
						Home
					</Link>

					<Link to="/about" onClick={() => setMenuOpen(false)}>
						About Us
					</Link>

					<Link to="/team" onClick={() => setMenuOpen(false)}>
						Our Team
					</Link>

					<Link to="/companies" onClick={() => setMenuOpen(false)}>
						Companies
					</Link>

					<Link to="/why-sampro" onClick={() => setMenuOpen(false)}>
						Why SamPro
					</Link>

					{/* <Link to="/applications">Applications</Link> */}

					<Link to="/contact" onClick={() => setMenuOpen(false)}>
						Contact
					</Link>

				</div>

			</div>
		</nav>
	);
}