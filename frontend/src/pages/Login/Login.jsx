import { useForm } from "react-hook-form";
import LoginForm from "@/components/LoginForm/LoginForm.jsx";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const LoginPageBackgroundVideo =
//   "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";

const LoginPageBackgroundVideo =
  "https://videos.pexels.com/video-files/17588869/17588869-uhd_2560_1440_24fps.mp4";

export default function Login() {
  const notify = () => {
    toast.success("🦄 Wow, it works!", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
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
      <ToastContainer />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
