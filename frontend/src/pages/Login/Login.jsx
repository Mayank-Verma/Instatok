import React, { useState } from "react";
import LoginForm from "@/components/LoginForm/LoginForm.jsx";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";
import styles from "./Login.module.css";
import Spinner from "@/components/Spinner/Spinner";
import SplashLoader from "@/components/SplashLoader/SplashLoader";

const LoginPageBackgroundVideo =
  "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";

// const LoginPageBackgroundVideo =
//   "https://videos.pexels.com/video-files/17588869/17588869-uhd_2560_1440_24fps.mp4";

export default function Login({ notify }) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false); // Set loading to false once video is loaded
    console.log("video is loaded");
  };

  return (
    <div className={styles.container}>
      {isVideoLoading && (
        // Show only the spinner in the center while loading
        <SplashLoader className={styles.splashloader} />
      )}
      <SignupLoginVideo
        videoURL={LoginPageBackgroundVideo}
        onVideoLoaded={handleVideoLoaded}
      />
      {!isVideoLoading && (
        <div className={styles.formWrapper}>
          <LoginForm notify={notify} />
        </div>
      )}
    </div>
  );
}

// latest code

{
  /* <div className={styles.container}>
      {isVideoLoading ? (
        // Show only the spinner in the center while loading
        <SplashLoader />
      ) : (
        // Show the video and form content after loading
        <>
          <div className={styles.formWrapper}>
            <LoginForm notify={notify} />
          </div>
          <SignupLoginVideo
            videoURL={LoginPageBackgroundVideo}
            onVideoLoaded={handleVideoLoaded}
          />
        </>
      )}
    </div> */
}

// import LoginForm from "@/components/LoginForm/LoginForm.jsx";
// import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";

// // const LoginPageBackgroundVideo =
// //   "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";

// const LoginPageBackgroundVideo =
//   "https://videos.pexels.com/video-files/17588869/17588869-uhd_2560_1440_24fps.mp4";

// export default function Login({ notify }) {
//   return (
//     <div
//       style={{
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "53%",
//           transform: "translate(-50%, -50%)",
//           zIndex: "9999",
//         }}
//       >
//         <LoginForm notify={notify} />
//       </div>
//       <SignupLoginVideo videoURL={LoginPageBackgroundVideo} />
//     </div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
