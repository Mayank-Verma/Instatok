import { useState } from "react";
import VideoComponent from "../VideoComponent";

const videos = [
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-166fbc2f-5135-4b3e-9c36-20601a28d436?t=2024-09-25T04%3A51%3A02.961Z",
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-43f930ed-f8b1-44fe-9c96-47a14f67590f?t=2024-09-25T04%3A52%3A25.303Z",
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-4921b2b2-fa44-40ec-9fcd-5e0b9af295c4?t=2024-09-25T04%3A52%3A36.420Z",
  "https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/85a85731-3e2b-42a0-899b-ed94492756eb-f0a42b73-0a61-4903-a156-d525cebf29b8?t=2024-09-25T04%3A52%3A42.720Z",
];

export default function ReelsComponent() {
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(false);
  const handleEnableAutoplay = () => {
    setIsAutoplayEnabled(true); // Enable autoplay with sound after button click
  };
  return (
    <div>
      <section>
        <button onClick={handleEnableAutoplay} style={{ color: "black" }}>
          Reels
        </button>
        <VideoComponent
          videoURL={videos[0]}
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL={videos[1]}
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL={videos[2]}
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
      <section>
        <VideoComponent
          videoURL={videos[3]}
          isAutoplayEnabled={isAutoplayEnabled}
        />
      </section>
    </div>
  );
}
