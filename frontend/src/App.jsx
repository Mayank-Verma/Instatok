import "./App.css";
// import React from "react";
// import ReactDOM from "react-dom";
import SnapScroll from "./components/SnapScroll.jsx";

const videos = [
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/ff07fc08-4acd-4bda-8eac-9e1769d3fd23-RPReplay_Final1715837447.mp4",
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/ff07fc08-4acd-4bda-8eac-9e1769d3fd23-41f51606-7d18-4dde-a4a4-5c70e0a49a3a-RPReplay_Final1715837447.mp4",
  // Add more video URLs here
];

function App() {
  const handleLastVideo = () => {
    console.log("Last video is visible");
  };
  return (
    <div>
      <h1>Reel App</h1>
      <SnapScroll videos={videos} onLastVideo={handleLastVideo} />
    </div>
  );
}

export default App;
