import styles from "./UploadPostDesign.module.css";
import UploadIcon from "../../assets/UploadIcon.svg";

function UploadPostDesign({ active }) {
  return (
    <div className={styles.mainContainer}>
      {active ? (
        <div>Drop it here like its hot 📥🔥</div>
      ) : (
        <>
          <img src={UploadIcon} alt="upload-icon" style={{ width: "140px" }} />
          <div>Drag Photo and video here</div>
          <div className={styles.btn}>Select from computer</div>
        </>
      )}
    </div>
  );
}

export default UploadPostDesign;
