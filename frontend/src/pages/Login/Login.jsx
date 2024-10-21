import LoginForm from "@/components/LoginForm/LoginForm.jsx";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";

// const LoginPageBackgroundVideo =
//   "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";

const LoginPageBackgroundVideo =
  "https://videos.pexels.com/video-files/17588869/17588869-uhd_2560_1440_24fps.mp4";

export default function Login({ notify }) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "53%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999 ",
        }}
      >
        <LoginForm notify={notify} />
      </div>
      <SignupLoginVideo videoURL={LoginPageBackgroundVideo} />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
