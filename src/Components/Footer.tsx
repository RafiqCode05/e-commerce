import { Link } from "react-router-dom"
import { SiGmail } from "react-icons/si";


const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-left">
                © 2025 Sənin E-commerce saytın
            </div>
            <div className="footer-center">
                <Link to="/about">
                    Haqqımızda
                </Link>
                <span> | </span>
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                    <SiGmail />
                </a>
            </div>
        </footer>
    )
}

export default Footer