import React from "react";
import logo from "../images/longLogo.png";
import { HashRouter as Router, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Router>
                    <Link to="/">
                        <img src={logo} className="Header__logo" />
                    </Link>

                    <ul className="login">
                        <li className="h-btn">
                            <Link to="/"  >SIGN IN</Link>
                        </li>
                        <li className="h-btn">
                            <Link to="/"  >SIGN UP</Link>
                        </li>
                    </ul>
                    <ul className="main">
                        <li className="h-btn">
                            <Link to="/"  >회사소개</Link>
                        </li>
                        <li className="h-btn">
                            <Link to="/"  >개발의뢰</Link>
                        </li>
                        <li className="h-btn">
                            <Link to="/"  >가격안내</Link>
                        </li>
                        <li className="h-btn">
                            <Link to="/"  >문의하기</Link>
                        </li>
                    </ul>
                </Router>
            </div>
        )
    }
}

export default Header;