// import { useEffect, useState } from "react";
// import axios from "axios";
// import VideoUpload from "../components/VideoUpload";
// import VideoPlayer from "../components/VideoPlayer";

// const Dashboard = () => {
// 	const [videos, setVideos] = useState([]);
// 	const [filter, setFilter] = useState("");
// 	const [page, setPage] = useState(1);
// 	const videosPerPage = 6;

// 	useEffect(() => {
// 		fetchVideos();
// 	}, []);

// 	const fetchVideos = async () => {
// 		const res = await axios.get("https://sierra-8kcj.onrender.com/api/videos", {
// 			headers: { Authorization: localStorage.getItem("token") },
// 		});
// 		setVideos(res.data);
// 	};

// 	const filteredVideos = videos.filter((video) =>
// 		video.title.toLowerCase().includes(filter.toLowerCase()),
// 	);

// 	const paginatedVideos = filteredVideos.slice(
// 		(page - 1) * videosPerPage,
// 		page * videosPerPage,
// 	);

// 	return (
// 		<div className="p-4">
// 			<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
// 			<VideoUpload onUpload={fetchVideos} />

// 			<input
// 				type="text"
// 				placeholder="Search videos..."
// 				className="border p-2 w-full mt-4"
// 				onChange={(e) => setFilter(e.target.value)}
// 			/>

// 			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
// 				{paginatedVideos.map((video) => (
// 					<VideoPlayer key={video._id} video={video} onDelete={fetchVideos} />
// 				))}
// 			</div>

// 			<div className="flex justify-center mt-4">
// 				<button
// 					className="px-4 py-2 mx-2 bg-gray-300 rounded"
// 					onClick={() => setPage(page - 1)}
// 					disabled={page === 1}
// 				>
// 					Prev
// 				</button>
// 				<button
// 					className="px-4 py-2 mx-2 bg-gray-300 rounded"
// 					onClick={() => setPage(page + 1)}
// 					disabled={paginatedVideos.length < videosPerPage}
// 				>
// 					Next
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
import { LiaFileUploadSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoUpload from "../components/VideoUpload";
import VideoPlayer from "../components/VideoPlayer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { PiListPlusBold } from "react-icons/pi";
import Modal from "../components/Modal";

const Dashboard = () => {
	const [videos, setVideos] = useState([]);
	const [filter, setFilter] = useState("");
	const [page, setPage] = useState(1);
	const videosPerPage = 6;

	useEffect(() => {
		fetchVideos();
	}, []);

	const fetchVideos = async () => {
		const res = await axios.get("https://sierra-8kcj.onrender.com/api/videos", {
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
		<div className="bg-gray-50 min-h-screen">
			<div className="max-w-7xl mx-auto pt-24 px-6">
				<div className="flex justify-between items-center mb-6">
					<input
						type="text"
						placeholder="Search videos..."
						className="border p-2 w-full md:w-1/3 rounded-lg shadow-sm"
						onChange={(e) => setFilter(e.target.value)}
					/>
					<div className="hidden md:flex space-x-2">
						{["Type", "Reach", "Impact", "Trend", "Engage"].map((filter) => (
							<button
								key={filter}
								className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200"
							>
								{filter}
							</button>
						))}
					</div>
					<div className="upload-section text-purple-700 flex gap-4">
						<Modal onUpload={fetchVideos}/>
						<PiListPlusBold />
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{paginatedVideos.map((video) => (
						<VideoPlayer key={video._id} video={video} onDelete={fetchVideos} />
					))}
				</div>

				<div className="flex justify-center mt-6">
					<button
						className="px-4 py-2 mx-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
						onClick={() => setPage(page - 1)}
						disabled={page === 1}
					>
						Prev
					</button>
					<button
						className="px-4 py-2 mx-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
						onClick={() => setPage(page + 1)}
						disabled={paginatedVideos.length < videosPerPage}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
