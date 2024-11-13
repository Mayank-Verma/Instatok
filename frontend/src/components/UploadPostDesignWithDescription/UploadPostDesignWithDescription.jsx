import { uploadImagePost } from "@/api/postService";
import styles from "./UploadPostDesignWithDescription.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UploadPostDesignWithDescription({ receivedFile }) {
  const navigate = useNavigate();
  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fileUrl = URL.createObjectURL(receivedFile); // url for the uploaded image as browswer doesn't allow direct access to path
  const onSubmit = async (data) => {
    console.log("data.description-->", data.descriptionInput);
    console.log(receivedFile);
    await uploadImagePost({
      image: receivedFile,
      description: data.descriptionInput,
    });
    navigate("/home");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
      <img
        src={fileUrl}
        alt="upload-icon"
        style={{
          width: "485px",
          height: "400px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
      <div>
        <input
          id="descriptionInput"
          {...register("descriptionInput")}
          placeholder="Add Description to your post"
          type="text"
          className={styles.descriptionInput}
        />
        {errors.descriptionInput && <p>{errors.descriptionInput.message}</p>}
      </div>

      <button type="submit" className={styles.btn}>
        Upload Post
      </button>
    </form>
  );
}

export default UploadPostDesignWithDescription;
