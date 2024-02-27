import classes from './Button.module.css';

const Button = (props) => {
    let className = `${classes.Button} ${props.className}`;
    return (
        <button className={className} onClick={props.onClick} type={props.type || "button"}>{ props.buttonName }</button>
    )    
};

export default Button;