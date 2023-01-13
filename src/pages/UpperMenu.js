import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./UpperMenu.css";
import { Button } from "./Button";

function UpperMenu() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav classaName="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      Optimism
      <i className="fab fa-typo3" />
    </Link>
          <Box className="navbar-menu">
          <Link to="/" className="nav-links">
          Travel
        </Link>
        <Link to="/tic-tac-toe" className="nav-links">
          Tic-Tac-Toe
        </Link>
        <Link to="/expense-tracker" className="nav-links">
          Expense Tracker
        </Link>
        <Link to="/game3" className="nav-links">
          GAME3
        </Link>
        <Link to="/game4" className="nav-links">
          GAME4
        </Link>
        <Link to="/books" className="nav-links">
          BOOKS
        </Link>
        <Link to="/store" className="nav-links">
          STORE
        </Link>           
          </Box>
      </div>
    </nav>
  );
}
export default UpperMenu;
