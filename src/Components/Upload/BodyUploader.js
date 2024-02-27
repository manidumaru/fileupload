import classes from "./BodyUploader.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const BodyUploader = () => {
  const [file, setFile] = useState();

  const handleFile = (event) => {    
    setFile(event.target.files[0]);
  };

  const resetHandler = () => {
    setFile("");
  };

  const fileUploadHandler = (event) => {
    event.preventDefault();
    console.log("form submit logic");
    //http request here
    //send video file contained in "file" tp backend
  };

  let fileName = "";
  let videoViewer = "";
  if (file) {
    fileName = file.name;
    let blobURL = URL.createObjectURL(file);
    console.log(blobURL);
    videoViewer = <video src={blobURL} controls></video>;
  }
  
  return (
    <div className={classes["body-holder"]}>
      <form onSubmit={fileUploadHandler} className={classes["body-form"]}>
        <div className={classes["upload-holder"]}>
          <label>
            <div className={classes["form-label"]}>Upload File</div>
            <input type="file" onChange={handleFile}></input>
            <div className={classes["form-filename"]}>{fileName}</div>
          </label>
        </div>
        <div className={classes["button-holder"]}>
          <Button type="submit" buttonName="Scan" />
          <Button type="reset" onClick={resetHandler} buttonName="Reset" />
        </div>        
      </form>
      <div className={classes['video-holder']}>{videoViewer}</div>
    </div>
  );
};

export default BodyUploader;
