import React, { useState } from "react";
import "../App.css"
import cats from "../assets/icons/icons8-cat-100 (1).png"
import favs from "../assets/icons/icons8-cat-caregivers-100 (1).png"
import vote from "../assets/icons/icons8-cat-100 (2).png"
import logo from "../assets/imgs/8a56a2e15bca99673bce0a5a0641fa69-removebg-preview.png"
import menu from "../assets/icons/icons8-menu-100.png"
import close from "../assets/icons/icons8-close-100.png"

function SideBarComponent() {
    const [activeLink, setActiveLink] = useState("Cats");

    const handleClick = (event) => {
        const clickedTitle = event.currentTarget.getAttribute("data-title");
        setActiveLink(clickedTitle);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>

            <div className={`navigation ${menuOpen ? 'active' : ''}`}>
                <div className={`toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <img src={menu} className={`open ${menuOpen ? 'hide' : ''}`} alt="Open Menu" style={{width: '40px'}}></img>
                    <img src={close} className={`close ${menuOpen ? '' : 'hide'}`} alt="Close Menu" style={{width: '40px'}}></img>
                </div>

                <span className="logo" style={{ color: 'white' }}>
                    <h3 style={{paddingTop: '80px' }}>Cat App</h3>
                    <img className="icono-logo" src={logo} alt="Cat Icon" style={{ width: '80px' }}></img>
                </span>
                <ul>
                    <li className={`list ${activeLink === "Cats" ? "active" : ""}`}>
                        <a href="#" onClick={handleClick} data-title="Cats">
                            <span className="icon"><img src={cats} alt="Cat Icon"></img></span>
                            <span className="title">Cats</span>
                        </a>
                    </li>

                    <li className={`list ${activeLink === "Favourites cats" ? "active" : ""}`}>
                        <a href="#" onClick={handleClick} data-title="Favourites cats">
                            <span className="icon"><img src={favs} alt="Favorites cats Icon"></img></span>
                            <span className="title">Favourites Cats</span>
                        </a>
                    </li>

                    <li className={`list ${activeLink === "?" ? "active" : ""}`}>
                        <a href="#" onClick={handleClick} data-title="?">
                            <span className="icon"><img src={vote}></img></span>
                            <span className="title">Voted Cats</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default SideBarComponent;