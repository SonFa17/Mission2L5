import turnersLogo from '../img/Logo.png';
import loginIcon from '../img/login-icon.png';
import phoneIcon from '../img/phone-icon.png';
import locationIcon from '../img/location-icon.png';
import { Link } from "react-router-dom";
import "./HeaderBar.css";

const LogoBar = () => {
    return (
        <div className="logo-bar-container">
            <Link to="/">
                <img src={turnersLogo} alt="Turners logo" className="logo-bar-logo"></img>
            </Link>

            <div className="logo-bar-sub-container">
                <button className="logo-bar-button">
                    <img src={loginIcon} alt="login icon" className="logo-bar-icon"></img>
                    <p><span style={{ fontWeight: 'Bolder'}}>LOGIN </span>OR <span style={{ fontWeight: 'Bolder'}}>REGISTER</span></p>
                </button>

                <button className="logo-bar-button">
                    <img src={phoneIcon} alt="login icon" className="logo-bar-icon"></img>
                    <p>0800 887 637</p>
                </button>

                <button className="logo-bar-button">
                    <img src={locationIcon} alt="location icon" className="logo-bar-icon"></img>
                    <p>Find Us</p>
                </button>
                <div className="logo-bar-language-link">
                    <p>中文</p>
                </div>
            </div>
        </div>
    )
}

export default LogoBar
