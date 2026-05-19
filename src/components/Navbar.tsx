import { Link } from "react-router-dom";
import logo from "../assets/sampro-logo.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="container nav-wrapper">
				<div className="logo-box">
					<img src={logo} className="logo" alt="SamPro Logo" />
				</div>

				<div className="menu">
					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/team">Our Team</Link>
					<Link to="/companies">Companies</Link>
					<Link to="/why-sampro">Why SamPro</Link>
					{/* <Link to="/applications">Applications</Link> */}
					<Link to="/contact">Contact</Link>
				</div>
			</div>
		</nav>
	);
}