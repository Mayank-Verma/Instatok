import { DragnDropUpload } from "@/components/DragnDropUpload/DragnDropUpload";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./Create.module.css";
function Create() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.center}>
        <DragnDropUpload />
      </div>
    </div>
  );
}

export default Create;
