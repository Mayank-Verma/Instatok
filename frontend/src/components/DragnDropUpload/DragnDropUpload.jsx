import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadPostDesign from "../UploadPostDesign/UploadPostDesign";
import styles from "./DragnDropUpload.module.css";
import UploadPostDesignWithDescription from "../UploadPostDesignWithDescription/UploadPostDesignWithDescription";

export function DragnDropUpload() {
  const [receivedFile, setReceivedFile] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    setReceivedFile(() => acceptedFiles[0]);
    // uploadImagePost({ path: acceptedFiles[0] });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.mainContainer}>
      {receivedFile ? (
        <UploadPostDesignWithDescription receivedFile={receivedFile} />
      ) : (
        <>
          <input {...getInputProps()} />
          {isDragActive ? (
            <UploadPostDesign active={true} />
          ) : (
            <UploadPostDesign />
          )}
        </>
      )}
    </div>
  );
}
