import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../App.css"
import cats from "../assets/icons/icons8-cat-100 (1).png"
import favs from "../assets/icons/icons8-cat-caregivers-100 (1).png"
import breeds from "../assets/icons/icons8-cat-100 (2).png"
import logo from "../assets/imgs/8a56a2e15bca99673bce0a5a0641fa69-removebg-preview.png"
import menu from "../assets/icons/icons8-menu-100.png"
import close from "../assets/icons/icons8-close-100.png"

function SideBarComponent() {
    const [activeLink, setActiveLink] = useState("cats");
    const location = useLocation();
    const currentPath = location.pathname;

    const handleLinkClick = (clickedTitle) => {
        setActiveLink(clickedTitle);
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* le doy la clase navigation y adicionalmente le da un valor active si menuOpen true. si es false no se agrega ninguna clase adicional, sólo la cadena vacía. Pudiendo así tener la nueva clase: .navigation.active */}
            <div className={`navigation ${menuOpen ? 'active' : ''}`}>

                {/* lo mismo aquí. la clase base es: toggle, pero se le agrega la clase active. --> me permite cambiar su estilo para mostrar que el menú está abierto.
                además, cuando se haga click en la sección, se ejecutará toggleMenu. --> me permite alternar entre abrir y cerrar el menú lateral. */}
                <div className={`toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <img src={menu} className={`open ${menuOpen ? 'hide' : ''}`} alt="Open Menu" style={{ width: '40px' }}></img>
                    <img src={close} className={`close ${menuOpen ? '' : 'hide'}`} alt="Close Menu" style={{ width: '40px' }}></img>
                </div>

                <Link
                    to="/cats"
                    onClick={toggleMenu}
                    data-title="cats"
                    className="logo"
                >
                    <h3 style={{ paddingTop: "80px", color: "white" }}>Cat App</h3>
                    <img className="icono-logo" src={logo} alt="Cat Icon" style={{ width: "80px" }} />
                </Link>

                <NavLink
                    to="/cats"
                    onClick={toggleMenu}
                    isActive={() => currentPath === "/cats"}
                    data-title="cats"
                    className={`list ${currentPath === "/cats" ? "active" : ""}`}
                >
                    <span className="icon">
                        <img src={cats} alt="Cat Icon" />
                    </span>
                    <span className="title">All Cats</span>
                </NavLink>

                <NavLink
                    to="/breeds"
                    onClick={toggleMenu}
                    isActive={() => currentPath === "/breeds"}
                    data-title="breeds"
                    className={`list ${currentPath === "/breeds" ? "active" : ""}`}
                >
                    <span className="icon">
                        <img src={breeds} alt="Breeds cats Icon" />
                    </span>
                    <span className="title">Breeds Cats</span>
                </NavLink>

                <NavLink
                    to="/favourites"
                    onClick={toggleMenu}
                    isActive={() => currentPath === "/favourites"}
                    data-title="favourites"
                    className={`list ${currentPath === "/favourites" ? "active" : ""}`}
                >
                    <span className="icon">
                        <img src={favs} alt="Favourites cats Icon" />
                    </span>
                    <span className="title">Favourites Cats</span>
                </NavLink>
            </div>
        </div>
    );
};
export default SideBarComponent;