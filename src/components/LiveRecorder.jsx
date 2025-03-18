import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "https://speech-to-text-transcription-backend-a3kn.vercel.app";
function LiveRecorder({ setTranscription }) {
    const [recording, setRecording] = useState(false);
    let mediaRecorder, audioChunks = [];

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);
        mediaRecorder.start();
        setRecording(true);
    };

    // const stopRecording = () => {
    //     mediaRecorder.stop();
    //     setRecording(false);
    // };
        const stopRecording = async () => {
        mediaRecorderRef.current.stop();
        setRecording(false);

        mediaRecorderRef.current.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
            const formData = new FormData();
            formData.append("audio", audioBlob);

            try {
                const response = await axios.post(`${API_URL}/transcribe`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                setTranscription(response.data.transcription);
            } catch (error) {
                console.error("Error sending recording:", error);
            }
        };
    };

    return (
        <div className="mb-4">
            <button onClick={recording ? stopRecording : startRecording} className="bg-red-500 text-white px-4 py-2 rounded">
                {recording ? "Stop Recording" : "Start Recording"}
            </button>
        </div>
    );
}

export default LiveRecorder;
