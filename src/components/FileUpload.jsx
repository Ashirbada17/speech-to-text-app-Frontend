// import React, { useState } from "react";
// import axios from "axios";

// function FileUpload({ setTranscription }) {
//     const [audio, setAudio] = useState(null);

//     const handleUpload = async () => {
//         if (!audio) return alert("Please upload an audio file.");
//         const formData = new FormData();
//         formData.append("audio", audio);

//         try {
//             const response = await axios.post("http://localhost:5000/transcribe", formData);
//             setTranscription(response.data.transcription);
//         } catch (error) {
//             alert("Failed to transcribe audio.");
//         }
//     };

//     return (
//         <div className="mb-4">
//             <input type="file" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} className="border p-2" />
//             <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Upload & Transcribe</button>
//         </div>
//     );
// }

// export default FileUpload;
import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL || "https://speech-to-text-transcription-backend-ldkgswfxj.vercel.app/";

function FileUpload({ setTranscription }) {
    const [audio, setAudio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!audio) {
            alert("Please upload an audio file.");
            return;
        }

        setLoading(true); // Start loading state
        const formData = new FormData();
        formData.append("audio", audio);

        try {
            // Send file to backend
            const response = await axios.post(`${API_URL}/transcribe`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.data.transcription) {
                setTranscription(response.data.transcription);
            } else {
                alert("Transcription in progress. Please wait...");
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("Failed to transcribe audio. Please try again.");
        }

        setLoading(false); // Stop loading state
    };

    return (
        <div className="mb-4">
            <input
                type="file"
                accept="audio/*"
                onChange={(e) => setAudio(e.target.files[0])}
                className="border p-2"
            />
            <button
                onClick={handleUpload}
                className={`bg-blue-500 text-white px-4 py-2 rounded mt-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
            >
                {loading ? "Uploading..." : "Upload & Transcribe"}
            </button>
        </div>
    );
}

export default FileUpload;
