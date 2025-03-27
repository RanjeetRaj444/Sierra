import { useState } from "react";
import axios from "axios";

const VideoUpload = ({ onUpload, setIsOpen }) => {
	const [file, setFile] = useState(null);
	const [form, setForm] = useState({ title: "", description: "", tags: "" });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("video", file);
		formData.append("title", form.title);
		formData.append("description", form.description);
		formData.append("tags", form.tags);

		await axios.post("https://sierra-8kcj.onrender.com/api/videos/upload", formData, {
			headers: { Authorization: localStorage.getItem("token") },
		});

		onUpload();
		setIsOpen(false);
	};

	return (
		<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
			<h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Video</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					placeholder="Title"
					className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Description"
					className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) => setForm({ ...form, description: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Tags (comma-separated)"
					className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) => setForm({ ...form, tags: e.target.value })}
				/>
				<input
					type="file"
					className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
				>
					Upload
				</button>
			</form>
		</div>
	);
};

export default VideoUpload;
