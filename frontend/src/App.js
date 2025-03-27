import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import VideoUpload from "./components/VideoUpload";

function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/uploadFile" element={<VideoUpload />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
