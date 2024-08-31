import React from 'react';
import { Link } from 'react-router-dom';
import './navSide.css';
import { IoIosLogOut } from "react-icons/io";
import { TbMailPlus } from "react-icons/tb";
import { IoInformationCircleOutline } from "react-icons/io5";
import { VscLibrary, VscAccount } from "react-icons/vsc";
import { GoHome } from "react-icons/go";

const NavSide = () => {
    return (
        <nav className="navSide-main-menu">
            <div className="navSide-scrollbar" id="navSide-style-1">
                <div className="navSide-icon-content-wrapper">

                    {/* Home */}
                    <div className="navSide-icon-content-container">
                        <Link to="/" className='navSide-link-tag'>
                            <div className='navSide-icon-text-div'>
                                <div className='navSide-font-icon-div'>
                                    <GoHome className="navSide-icon" />
                                </div>
                                <div className='navSide-span-div'>
                                    <span className="navSide-text">Home</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Library */}
                    <div className="navSide-icon-content-container">
                        <Link to="/library" className='navSide-link-tag'>
                            <div className='navSide-icon-text-div'>
                                <div className='navSide-font-icon-div'>
                                    <VscLibrary className="navSide-icon" />
                                </div>
                                <div className='navSide-span-div'>
                                    <span className="navSide-text">Library</span>
                                </div>
                            </div>
                        </Link>
                    </div>


                    {/* About */}
                    <div className="navSide-icon-content-container">
                        <Link to="/about" className='navSide-link-tag'>
                            <div className='navSide-icon-text-div'>
                                <div className='navSide-font-icon-div'>
                                    <IoInformationCircleOutline className="navSide-icon" />
                                </div>
                                <div className='navSide-span-div'>
                                    <span className="navSide-text">About</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Contact */}
                    <div className="navSide-icon-content-container">
                        <Link to="/contact" className='navSide-link-tag'>
                            <div className='navSide-icon-text-div'>
                                <div className='navSide-font-icon-div'>
                                    <TbMailPlus className="navSide-icon" />
                                </div>
                                <div className='navSide-span-div'>
                                    <span className="navSide-text">Contact</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Profile */}
                    <div className="navSide-icon-content-container">
                        <Link to="/profile" className='navSide-link-tag'>
                            <div className='navSide-icon-text-div'>
                                <div className='navSide-font-icon-div'>
                                    <VscAccount className="navSide-icon" />
                                </div>
                                <div className='navSide-span-div'>
                                    <span className="navSide-text">Login</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            {/* Log-out */}
            <div className="navSide-icon-content-container navSide-logout">
                <Link to="/account" className='navSide-link-tag'>
                    <div className='navSide-icon-text-div'>
                        <div className='navSide-font-icon-div'>
                            <IoIosLogOut className="navSide-icon" />
                        </div>
                        <div className='navSide-span-div'>
                            <span className="navSide-text">Logout</span>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default NavSide;
