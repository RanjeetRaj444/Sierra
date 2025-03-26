import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decoded = jwtDecode(token);
			setUser(decoded);
		}
	}, []);

	const login = async (credentials) => {
		try {
			const res = await axios.post(
				"http://localhost:5000/api/auth/login",
				credentials,
			);
			localStorage.setItem("token", res.data.token);
			setUser(jwtDecode(res.data.token));
			navigate("/dashboard");
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/login");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
