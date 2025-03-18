# 🎤 Speech-to-Text Transcription (Frontend)

This is a React (Vite) frontend for converting speech to text using **AssemblyAI**. The app allows users to upload audio files or record live audio, which is then sent to the backend for transcription. The transcribed text is displayed on the frontend.

## 🚀 Features

✅ Upload audio files (MP3, WAV, etc.)  
✅ Record live audio  
✅ Send audio to the backend for transcription using AssemblyAI  
✅ Display transcriptions in real-time  
✅ Simple and responsive UI with Tailwind CSS (CDN)  

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), JavaScript, Tailwind CSS (CDN)  
- **Backend:** Node.js, Express.js  
- **Database:** Local MongoDB  
- **API Used:** [AssemblyAI Speech-to-Text API](https://www.assemblyai.com/)  

---

## 📂 Folder Structure

```
speech-to-text-frontend/
│── public/               # Static files
│── src/                  
│   ├── components/       # Reusable components
│   ├── pages/            # Main pages
│   ├── utils/            # Utility functions
│   ├── App.js            # Main App component
│   ├── main.jsx          # React entry point
│── index.html            # Main HTML file
│── package.json          # Project dependencies
│── vite.config.js        # Vite configuration
│── README.md             # Project documentation
```

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/speech-to-text-frontend.git
cd speech-to-text-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

The app will be running at **http://localhost:5173/** 🚀

---

## ⚙️ Backend Setup  

This frontend works with a **Node.js + Express.js** backend that integrates **AssemblyAI** for transcription. Set up the backend by following [this guide](https://github.com/your-username/speech-to-text-backend).

---

## 📜 How It Works

1. Users can **upload an audio file** or **record live audio**.  
2. The audio is sent to the **backend** for processing.  
3. The backend uses **AssemblyAI** to convert speech to text.  
4. The transcribed text is **sent back** to the frontend and displayed.  

---

## 🎯 To-Do List

- [ ] Improve UI/UX  
- [ ] Add authentication (optional)  
- [ ] Save transcriptions to supabase 

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).  

---

⭐ **If you found this project useful, consider giving it a star!** ⭐
