import { useForm } from "react-hook-form";
import SignupForm from "@/components/SignupForm/SignupForm.jsx";
import "./Signup.css";
import SignupLoginVideo from "@/components/SignupLoginVideo/SignupLoginVideo.jsx";

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
        style={{ position: "fixed", top: "10vw", left: "48%", zIndex: "99999" }}
      >
        <SignupForm />
      </div>
      <SignupLoginVideo />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
