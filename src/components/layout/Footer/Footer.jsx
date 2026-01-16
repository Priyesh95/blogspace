import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-backdrop"></div>
            <div className="footer-top-accent"></div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <span>B</span>
                            </div>
                            <p>&copy; 2024 <span className="brand-name">BlogSpace</span>. All rights reserved.</p>
                        </div>
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