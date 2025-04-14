import logo from '../../../assets/images/logo.jpg'
import './Header.module.scss'
import classes from './Header.module.scss'

function Header() {
    return (
        <header className={classes.header}>
            <img  className={classes.logo} src={logo} alt=""/>
            <nav className={classes.navv}>
                <a href="#">Home</a>
                <a href="#">Registration</a>
                <a href="#">Contact</a>
                <a href="#">Telephone</a>
            </nav>           
        </header>
    )
}

export default Header
