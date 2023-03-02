import React from "react";
import './Navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'

const logo = "bitboxdLogo.svg";
const Navbar = () => {
    return (
        <div className="nav-cont">
            <div classname="logo">
                <img src={logo} alt="bitboxd logo" />
            </div>
            <div className="my-list">
                <span>My List</span>
            </div>
            <div className="reviewed">
                <span>Reviewed</span>
            </div>
            <div className="search">
                <AiOutlineSearch />
                <span>Search</span>
            </div>
            <div className="profile">
                <CgProfile />
                <span>Profile</span>
            </div>
        </div>
    )
}

export default Navbar