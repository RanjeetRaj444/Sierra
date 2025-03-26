import { useState } from "react";
import axios from "axios";

const VideoPlayer = ({ video, onDelete }) => {
	const [editing, setEditing] = useState(false);
	const [form, setForm] = useState({
		title: video.title,
		description: video.description,
	});

	const handleDelete = async () => {
		await axios.delete(`http://localhost:5000/api/videos/${video._id}`, {
			headers: { Authorization: localStorage.getItem("token") },
		});
		onDelete();
	};

	const handleUpdate = async () => {
		await axios.patch(`http://localhost:5000/api/videos/${video._id}`, form, {
			headers: { Authorization: localStorage.getItem("token") },
		});
		setEditing(false);
		onDelete();
	};

	return (
		<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mx-auto">
			<video className="w-full rounded-lg border border-gray-300 shadow-sm" controls>
				<source src={`http://localhost:5000/${video.fileUrl}`} type="video/mp4" />
			</video>

			{editing ? (
				<div className="mt-4">
					<input
						type="text"
						value={form.title}
						className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						onChange={(e) => setForm({ ...form, title: e.target.value })}
					/>
					<textarea
						value={form.description}
						className="w-full border border-gray-300 p-2 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						onChange={(e) => setForm({ ...form, description: e.target.value })}
					></textarea>
					<button
						onClick={handleUpdate}
						className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
					>
						Save
					</button>
				</div>
			) : (
				<div className="mt-4">
					<h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
					<p className="text-gray-600 mt-1">{video.description}</p>
				</div>
			)}

			<div className="flex justify-between mt-4">
				<button
					onClick={() => setEditing(!editing)}
					className="text-blue-500 hover:text-blue-600 font-semibold"
				>
					Edit
				</button>
				<button
					onClick={handleDelete}
					className="text-red-500 hover:text-red-600 font-semibold"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default VideoPlayer;
