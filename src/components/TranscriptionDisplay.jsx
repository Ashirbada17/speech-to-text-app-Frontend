import React from "react";

function TranscriptionDisplay({ transcription }) {
    return (
        <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Transcription:</h2>
            <p className="mt-2 text-gray-800">{transcription || "No transcription yet."}</p>
        </div>
    );
}

export default TranscriptionDisplay;
