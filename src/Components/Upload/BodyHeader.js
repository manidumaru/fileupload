import classes from './BodyHeader.module.css';

const BodyHeader = () => {
    return (
        <div className={classes['header-holder']}>
            <div className={classes.title}>Detect DeepFake Videos</div>
            <div className={classes.subtitle}>upload a video.</div>
        </div>
    );
};

export default BodyHeader;