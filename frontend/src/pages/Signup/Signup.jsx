import { useForm } from "react-hook-form";
import SignupForm from "@/components/SignupForm/SignupForm.jsx";
import SignupLoginCarousel from "@/components/SignupLoginCarousel/SignupLoginCarousel.jsx";
import "./Signup.css";

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
    <main
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <SignupForm />
      </div>
      <SignupLoginCarousel />
    </main>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
