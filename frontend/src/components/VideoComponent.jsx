import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const VideoComponent = ({ videoURL, isAutoplayEnabled }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView && isAutoplayEnabled) {
        videoRef.current.muted = false; // Unmute if in view and autoplay is enabled
        videoRef.current.play(); // Play video
        console.log("playing and unmuting current video");
      } else if (isInView) {
        videoRef.current.play(); // Play muted video if in view
      } else {
        videoRef.current.pause(); // Pause video if out of view
        console.log("muting and pausing the previous video");
      }
    }
  }, [isInView, isAutoplayEnabled]);

  return (
    <div style={{ position: "relative" }}>
      <Button
        variant="destructive"
        style={{
          position: "absolute",
          top: "50%",
          left: "70%",
        }}
      >
        save
      </Button>
      <video
        autoPlay
        ref={videoRef}
        muted
        loop
        controls
        style={{ height: "100vh", width: "400px" }}
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
