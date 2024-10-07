export default function SignupLoginVideo() {
  return (
    <div className="h-screen">
      <video
        className="h-screen w-[100vw] object-cover"
        // src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4" // Replace with your video URL or path
        src="https://videos.pexels.com/video-files/3403450/3403450-uhd_2732_1440_25fps.mp4"
        autoPlay
        loop // Optional: To loop the video
        muted // Mute the video (necessary for autoplay in most browsers)
        // controls // Optional: Show controls for play, pause, etc.
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
