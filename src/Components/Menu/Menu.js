import { Fragment } from 'react';
import classes from './Menu.module.css';
import logo from '../../Assets/logo.png';

const Menu = () => {
    return <Fragment>
        <div className= { classes['menu-holder'] }>
            <img className= {classes['menu-image']} src = { logo } alt = "logo" />
            <div className = { classes['menu-links'] }>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
            </div>
        </div>
    </Fragment>
};

export default Menu;