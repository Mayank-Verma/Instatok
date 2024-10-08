import { useForm } from "react-hook-form";
import SignupForm from "@/components/SignupForm/SignupForm.jsx";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";

const LoginPageBackgroundVideo =
  "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
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
        <SignupForm />
      </div>
      <SignupLoginVideo videoURL={LoginPageBackgroundVideo} />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
