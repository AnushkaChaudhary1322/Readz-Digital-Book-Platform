import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { VscAccount } from "react-icons/vsc";

const Header = () => {
    const navigate = useNavigate();

    const logout = async () => navigate('/account');

    return (
        <div className="app-bar">
            <div className='header-logo-div'>
            <img src='../../../logo-nav.png' className="header-logo-img"/>
            </div>
            <div className="tool-bar">
                <Link to='/' className="item">Home</Link>
                
                <Link to='/library' className="item">Library</Link>
                <Link to='/about' className="item">About</Link>
                <Link to='/contact' className="item">Contact</Link>
            </div>
            <div className="logout">
                <Link to='/profile' className="item">
                <VscAccount className='header-profile-icon'/>
                </Link>
                <Link to='/account' className="logout-link">Logout</Link>
            </div>
        </div>
    );
}

export default Header;
