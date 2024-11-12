import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadImagePost } from "@/api/postService";
import UploadPostDesign from "../UploadPostDesign/UploadPostDesign";
import styles from "./DragnDropUpload.module.css";

export function DragnDropUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    uploadImagePost({ path: acceptedFiles[0] });
    // window.open(acceptedFiles[0].path);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.mainContainer}>
      <input {...getInputProps()} />
      {isDragActive ? <UploadPostDesign active={true} /> : <UploadPostDesign />}
    </div>
  );
}
