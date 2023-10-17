import "./Header.scss"

const Header = () => {
    return(
        <div className="header">
            <div className="headerWrapper">
                <div className="topLeft">
                    <img className="logo" src="/img/Logo.png" alt="Logo"/>
                </div>
                <div className="topRight">
                    <button className="signOutBtn">Sign Out</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default Header