
const NavBar = () => {
    return <nav>
        <div className="nav-group">
            <div className="nav-header">
                <img src="church.png" alt="" />
                <a href="#home" id="header">Ben Smitthimedhin</a>
            </div>
            <div className="nav-links">
                <a href="#about">About</a> 
                <a href="#experience">Experience</a>
                <a href="#technologies">Technologies</a>
                <a href="#writings">Writings</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
}

export default NavBar;