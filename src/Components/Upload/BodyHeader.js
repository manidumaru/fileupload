import classes from './BodyHeader.module.css';
import { useState } from 'react';

const BodyHeader = () => {

    const [file, setFile] = useState();

    const handleFile = (event) => {
      // console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    };
  
    const resetHandler = () => {
      setFile('');
    };
  
    const fileUploadHandler = (event) => {
      event.preventDefault();
  
      //http request here
      //send video file contained in "file" tp backend
      
    };
  
    let fileName = "";
    let videoViewer = "";
  
    if (file) {
      fileName = file.name;
      let blobURL = URL.createObjectURL(file);    
      videoViewer = <video src={blobURL} height="240" controls autoplay></video>
    }
    return (
        <div className={classes["body-holder"]}>
        <form onSubmit={fileUploadHandler} className={classes["body-form"]}>
          <div className={classes['upload-holder']}>
            <label>
                <div className={classes['form-label']}>Upload File</div>
                <input type="file" onChange={handleFile}></input>
                <div className={classes['form-filename']}>{fileName}</div>                
            </label>            
          </div>
          <div className={classes['button-holder']}>
            <button type="submit">Scan</button>
            <button type="reset" onClick={resetHandler}>Reset</button>
          </div>
        </form>
        {videoViewer}
      </div>
    );
};

export default BodyHeader;