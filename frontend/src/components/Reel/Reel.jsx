import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import reelsHeart from "../../assets/reelsHeart.svg";
import reelsComment from "../../assets/reelsComment.svg";
import reelsShare from "../../assets/reelsShare.svg";
import reels3dots from "../../assets/reels3dots.svg";
import styles from "./Reel.module.css";
import MuteUnmuteButton from "../MuteUnmuteButton/MuteUnmuteButton";

const Reel = ({ videoURL, isAutoplayEnabled }) => {
  const [isMute, setIsMute] = useState(isAutoplayEnabled);
  let randomuser = Math.round(Math.random() * 50 + 1);
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
    <div className={styles.mainContainer}>
      <div className={styles.muteUnmuteButton}>
        <MuteUnmuteButton isMute={isMute} />
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.optionsInnerContainer}>
          <img src={reelsHeart} alt="reelsHeart" />
          <span>3</span>
        </div>
        <div className={styles.optionsInnerContainer}>
          <img src={reelsComment} alt="reelsComment" />
          <span>3</span>
        </div>
        <img src={reelsShare} alt="reelsShare" />
        <img src={reels3dots} alt="reels3dots" />
      </div>
      <div className={styles.reelInfoSection}>
        <div className={styles.profilePicAndUsernameAndFollowContainer}>
          <img
            src={`https://randomuser.me/api/portraits/women/${randomuser}.jpg`}
            className={styles.profilePicture}
          ></img>
          <div className={styles.username}>username</div>
          <button className={styles.followButton}>Follow</button>
        </div>
        <div className={styles.description}>
          This is some random caption I am writing just to get the fun out of it
        </div>
      </div>

      <div className="videoContainer">
        <video
          className="videoPlayer"
          autoPlay
          ref={videoRef}
          muted
          loop
          // controls
          style={{
            height: "100vh",
            maxWidth: "40rem",
            backgroundColor: "black",
          }}
        >
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Reel;
