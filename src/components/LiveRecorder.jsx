import React, { useState } from "react";

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

    const stopRecording = () => {
        mediaRecorder.stop();
        setRecording(false);
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
