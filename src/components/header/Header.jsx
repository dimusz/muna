import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo8 from "../../logo/logo8.png";
import logo3 from "../../logo/logo3.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SmartphoneIcon from '@mui/icons-material/Smartphone';

function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="container1">
      <div id="navBar-form">
        <div className="header-form">
          {" "}
          <div id="logo">
            <img id="image-logo" src={logo8} alt="logo" />
          </div>
          <div className="phone-icon">
            <SmartphoneIcon
              className="phone"
              
              sx={{ fontSize: "1em" }}
            />
          </div>
          <div className="menu-icon">
            <MenuOutlinedIcon
              className="menu"
              onClick={showMenu}
              sx={{ fontSize: "1.5em" }}
            />
          </div>
          <nav className={active ? "slider active" : "slider"}>
            <div id="logo3">
              <img id="image-logo3" src={logo3} alt="logo3" />
            </div>
            <ul>
              <div className="closed">
                <CloseIcon
                  className="close"
                  onClick={showMenu}
                  sx={{ fontSize: "1.5em" }}
                />
              </div>
              <li onClick={showMenu}>
                <NavLink to="/acasa">Acasa</NavLink>
              </li>
              <li onClick={showMenu}>
                <NavLink to="/servicii">Servicii</NavLink>
              </li>
              <li onClick={showMenu}>
                <NavLink to="/despre">About Us</NavLink>
              </li>
              <li onClick={showMenu}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>{" "}
      <div id="header-line"></div>
    </div>
  );
}

export default Header;
