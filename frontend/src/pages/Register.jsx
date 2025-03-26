import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [form, setForm] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/api/auth/register", form);
			navigate("/login");
		} catch (err) {
			setError("Registration failed. Try a different username.");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-6 w-96">
				<h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
				{error && <p className="text-red-500 text-sm mb-2">{error}</p>}
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Username"
						className="w-full p-3 border rounded-lg"
						value={form.username}
						onChange={(e) => setForm({ ...form, username: e.target.value })}
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full p-3 border rounded-lg"
						value={form.password}
						onChange={(e) => setForm({ ...form, password: e.target.value })}
					/>
					<button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
						Register
					</button>
				</form>
				<p className="text-sm text-center mt-4">
					Already have an account?{" "}
					<a href="/login" className="text-blue-500">
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Register;
