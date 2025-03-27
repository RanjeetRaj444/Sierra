import { useState } from "react";
import { LiaFileUploadSolid } from "react-icons/lia";
import VideoUpload from "./VideoUpload";

const Modal = ({ onUpload }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-center items-center z-50">
			{/* Button to Open Modal */}
			<button className="" onClick={() => setIsOpen(true)}>
				<LiaFileUploadSolid />
			</button>

			{/* Modal Overlay */}
			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-6 rounded-lg shadow-lg w-96">
						<VideoUpload onUpload={onUpload} setIsOpen={setIsOpen}/>

						{/* Close Button */}
						<button
							className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
							onClick={() => setIsOpen(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
