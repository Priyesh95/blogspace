import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; 2024 BlogSpace. All rights reserved.</p>
                    </div>
                    
                    <div className="footer-links">
                        <div className="footer-nav">
                            <a href="/about" className="footer-link">About</a>
                            <a href="/contact" className="footer-link">Contact</a>
                        </div>
                        
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <span className="social-icon">FB</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <span className="social-icon">TW</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <span className="social-icon">IG</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;