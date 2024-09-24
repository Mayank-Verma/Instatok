import "./App.css";
import VideoComponent from "./components/VideoComponent";
import { useState } from "react";

// const videos = [
//   "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/ff07fc08-4acd-4bda-8eac-9e1769d3fd23-RPReplay_Final1715837447.mp4",
//   "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/ff07fc08-4acd-4bda-8eac-9e1769d3fd23-41f51606-7d18-4dde-a4a4-5c70e0a49a3a-RPReplay_Final1715837447.mp4",
//   // Add more video URLs here
// ];

function App() {
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);
  const handleEnableAutoplay = () => {
    setIsAutoplayEnabled(true); // Enable autoplay with sound after button click
  };

  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch((error) => {
  //       console.error("Error attempting to play", error);
  //     });
  // };
  // useEffect(() => {
  //   attemptPlay();
  // }, []);

  return (
    <div>
      <section>
        <button onClick={handleEnableAutoplay} style={{ color: "black" }}>
          Reels
        </button>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/71927741-5200-4545-b102-9519c3c4f657-60c8fc91-84c1-4427-9259-af9db5687644"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/71927741-5200-4545-b102-9519c3c4f657-60c8fc91-84c1-4427-9259-af9db5687644"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/71927741-5200-4545-b102-9519c3c4f657-60c8fc91-84c1-4427-9259-af9db5687644"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/71927741-5200-4545-b102-9519c3c4f657-60c8fc91-84c1-4427-9259-af9db5687644"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
    </div>
  );
}

export default App;
