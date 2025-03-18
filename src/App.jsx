import React, { useState } from "react";
import FileUpload from "./components/FileUpload.jsx";
import LiveRecorder from "./components/LiveRecorder.jsx";
import TranscriptionDisplay from "./components/TranscriptionDisplay.jsx";


function App() {
    const [transcription, setTranscription] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="w-full max-w-2xl p-8 rounded-xl shadow-2xl border border-white/40" 
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(230,230,250,0.9))",
                backdropFilter: "blur(10px)"
            }}>
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
               🔉    Speech-to-Text Transcription           
            </h1>
            <div className="space-y-6">
                <FileUpload setTranscription={setTranscription} />
                <LiveRecorder setTranscription={setTranscription} />
                <TranscriptionDisplay transcription={transcription} />
            </div>
        </div>
    </div>
    );
}

export default App;
