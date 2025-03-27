import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className="bg-gradient-to-r from-white to-purple-100 p-4 fixed top-0 w-full shadow-md z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold text-purple-700">Sierra</h1>

				{/* Navigation Links */}
				<ul className="flex space-x-6 text-gray-700 font-medium">
					<li>
						<a href="/dashboard" className="hover:text-purple-600">
							Dashboard
						</a>
					</li>
					<li>
						<a href="/dashboard" className="hover:text-purple-600">
							Pricing
						</a>
					</li>
					<li>
						<a href="/dashboard" className="hover:text-purple-600">
							Support
						</a>
					</li>
				</ul>

				{/* Icons (Placeholder) */}
				<div className="flex space-x-4">
					<span className="text-gray-500">🔔</span>
					<span className="text-gray-500">👤</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
