import { useState, useRef, useEffect } from "react";
function VideoItem({ style, video }) {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const videoRef = ref.current;
    if (!videoRef) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    videoRef.addEventListener("play", handlePlay);
    videoRef.addEventListener("pause", handlePause);
    videoRef.addEventListener("loadeddata", () => setIsLoaded(true));
    return () => {
      videoRef.removeEventListener("play", handlePlay);
      videoRef.removeEventListener("pause", handlePause);
    };
  }, []);
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isPlaying && (
        <button
          style={{ position: "absolute", zIndex: 1 }}
          onClick={() => ref.current.play()}
        >
          Play
        </button>
      )}
      <div style={{ width: 20, height: 20, position: "absolute", zIndex: 1 }}>
        Heart
      </div>
      {!isLoaded && (
        <p style={{ position: "absolute", zIndex: 1 }}>Loading...</p>
      )}
      <video
        src={video}
        ref={ref}
        autoPlay
        style={{ width: "100%", height: "100%" }}
        onEnded={(e) => console.log(e, "Ended")}
        onClick={(e) => {
          ref.current.pause();
          console.log(e, "onClick");
        }}
      />
    </div>
  );
}

export default VideoItem;
