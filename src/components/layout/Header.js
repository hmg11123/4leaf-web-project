import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Router>
                    <Link to="/">
                        <div className="Header__logo"></div>
                    </Link>
                </Router>

                <ul className="login">
                    <li>
                        <input type="button" value="SIGN IN" className="h-btn" />
                    </li>
                    <li>
                        <input type="button" value="SIGN UP" className="h-btn" />
                    </li>
                </ul>
                <ul className="main">
                    <li>
                        <input type="button" value="회사소개" className="h-btn" />
                    </li>
                    <li>
                        <input type="button" value="의뢰하기" className="h-btn" />
                    </li>
                    <li>
                        <input type="button" value="문의하기" className="h-btn" />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;