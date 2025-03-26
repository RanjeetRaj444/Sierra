import { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

const VideoList = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			const res = await axios.get("http://localhost:5000/api/videos", {
				headers: { Authorization: localStorage.getItem("token") },
			});
			setVideos(res.data);
		};
		fetchVideos();
	}, []);

	return (
		<div className="container mx-auto p-6">
			<h2 className="text-2xl font-bold text-gray-800 mb-4">Your Videos</h2>
			{videos.length === 0 ? (
				<p className="text-gray-500">No videos uploaded yet.</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{videos.map((video) => (
						<VideoPlayer key={video._id} video={video} />
					))}
				</div>
			)}
		</div>
	);
};

export default VideoList;
