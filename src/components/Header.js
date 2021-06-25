import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header>Totoche
            <ul>
                <li> <Link to="/">HOME </Link> </li>
                <li> <Link to="/About">ABOUT</Link> </li>
                <li> <Link to="/Contact">CONTACT</Link> </li>
            </ul>
        </header>

    )
}

export default Header;