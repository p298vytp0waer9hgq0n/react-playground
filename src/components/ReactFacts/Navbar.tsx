import logoImg from '../../images/portrait01.png';

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo__img" src={logoImg} alt="logo" />
                <h3 className="logo__text">ReactFacts</h3>
            </div>
            <h4 className="navbar__text">React Course - Project 1</h4>
        </nav>
    )
}