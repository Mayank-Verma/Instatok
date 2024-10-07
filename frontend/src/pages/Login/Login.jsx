import { useForm } from "react-hook-form";
import LoginForm from "@/components/LoginForm/LoginForm.jsx";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";

export default function Login() {
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
        <LoginForm />
      </div>
      <SignupLoginVideo />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
