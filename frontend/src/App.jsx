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
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-4921b2b2-fa44-40ec-9fcd-5e0b9af295c4"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-f0a42b73-0a61-4903-a156-d525cebf29b8"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-43f930ed-f8b1-44fe-9c96-47a14f67590f"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL="https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-166fbc2f-5135-4b3e-9c36-20601a28d436"
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
    </div>
  );
}

export default App;
