import { useEffect, useState } from "react";
import axios from "axios";
import VideoUpload from "../components/VideoUpload";
import VideoPlayer from "../components/VideoPlayer";

const Dashboard = () => {
	const [videos, setVideos] = useState([]);
	const [filter, setFilter] = useState("");
	const [page, setPage] = useState(1);
	const videosPerPage = 6;

	useEffect(() => {
		fetchVideos();
	}, []);

	const fetchVideos = async () => {
		const res = await axios.get("http://localhost:5000/api/videos", {
			headers: { Authorization: localStorage.getItem("token") },
		});
		setVideos(res.data);
	};

	const filteredVideos = videos.filter((video) =>
		video.title.toLowerCase().includes(filter.toLowerCase()),
	);

	const paginatedVideos = filteredVideos.slice(
		(page - 1) * videosPerPage,
		page * videosPerPage,
	);

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
			<VideoUpload onUpload={fetchVideos} />

			<input
				type="text"
				placeholder="Search videos..."
				className="border p-2 w-full mt-4"
				onChange={(e) => setFilter(e.target.value)}
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
				{paginatedVideos.map((video) => (
					<VideoPlayer key={video._id} video={video} onDelete={fetchVideos} />
				))}
			</div>

			<div className="flex justify-center mt-4">
				<button
					className="px-4 py-2 mx-2 bg-gray-300 rounded"
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
				>
					Prev
				</button>
				<button
					className="px-4 py-2 mx-2 bg-gray-300 rounded"
					onClick={() => setPage(page + 1)}
					disabled={paginatedVideos.length < videosPerPage}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
