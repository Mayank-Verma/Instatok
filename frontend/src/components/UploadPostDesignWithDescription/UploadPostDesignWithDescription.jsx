import styles from "./UploadPostDesignWithDescription.module.css";

function UploadPostDesignWithDescription({ receivedFile }) {
  const fileUrl = URL.createObjectURL(receivedFile);
  console.log("recievedFile", receivedFile);
  return (
    <div className={styles.mainContainer}>
      <img
        src={fileUrl}
        alt="upload-icon"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
      <input type="text" placeholder="Add Description" />
      <div className={styles.btn}>Upload</div>
    </div>
  );
}

export default UploadPostDesignWithDescription;
