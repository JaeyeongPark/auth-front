import "./Header.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="headerWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <img className="logo" src="/img/Logo.png" alt="Logo"/>
                    </Link>
                </div>
                <div className="topRight">
                    <button className="signOutBtn">Sign Out</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default Header