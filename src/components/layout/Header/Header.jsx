import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import SearchComponent from '../../common/SearchComponent/SearchComponent';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = ({onSearch}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const {isAuthenticated, logout} = useAuth();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleSearch = (term) => {
        setSearchTerm(term);
        // You can add navigation to search results page or other search functionality here
        onSearch(searchTerm);
    };

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-backdrop"></div>
            <div className="container header-container">
                <div className="logo">
                    <div className="logo-icon">
                        <span>B</span>
                    </div>
                    <Link to="/">
                        <h1>BlogSpace</h1>
                    </Link>
                </div>
                <div className="header-spacer"></div>
                
                <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                
                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item nav-search">
                            <SearchComponent onSearch={handleSearch} placeholder="Search..." />
                        </li>
                        {!isAuthenticated() ?
                        <li className="nav-item">
                            <div className="auth-buttons">
                                <NavLink to="/login" className="btn-register">
                                    Login
                                </NavLink>
                                {/* <NavLink to="/register" className="btn-register">
                                    Register
                                </NavLink> */}
                            </div>
                        </li>
                        : <li className="nav-item">
                        <div className="auth-buttons">
                            <button onClick={handleLogout} className="logout-btn">
                                Logout
                            </button>
                        </div>
                    </li>}
                    </ul>
                </nav>
            </div>
            <div className="header-bottom-accent"></div>
        </header>
    );
};

export default Header;

