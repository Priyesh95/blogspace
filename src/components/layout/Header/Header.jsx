import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>BlogSpace</h1>
                </div>
                
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/topics" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Topics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

