import classes from "./Body.module.css";
import BodyHeader from "./BodyHeader";
import BodyUploader from "./BodyUploader";

const Body = () => {
  return (
    <div className={classes['body-holder']}>
        <BodyHeader />
        <BodyUploader />
    </div>
  );
};

export default Body;
