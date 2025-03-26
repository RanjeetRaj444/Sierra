import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className="bg-gray-800 p-4 text-white flex justify-between">
			<Link to="/dashboard" className="text-xl font-bold">
				Video Manager
			</Link>
			{user ? (
				<button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
					Logout
				</button>
			) : (
				<Link to="/login" className="bg-blue-500 px-4 py-2 rounded">
					Login
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
