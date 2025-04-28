import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import cup1 from "../../assets/Cup-1.png";
import cup from "../../assets/Cup.png";
import bean1 from "../../assets/bean1.png";
import bean2 from "../../assets/bean2.png";
import bean3 from "../../assets/bean3.png";
import bean4 from "../../assets/bean4.png";
import bean5 from "../../assets/bean5.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="promo">
        <img src={bean1} alt="bean" className="bean bean-1" />
        <img src={bean2} alt="bean" className="bean bean-2" />
        <img src={bean3} alt="bean" className="bean bean-3" />
        <img src={bean4} alt="bean" className="bean bean-4" />
        <img src={bean5} alt="bean" className="bean bean-5" />
        <img src={cup1} alt="bean" className="cup cup-left" />
        <img src={cup} alt="bean" className="cup cup-right" />
        <div className="text">
          <h1>
            ЭТО
            <br />
            ТВОЙ
            <br />
            КОФЕ
          </h1>
        </div>

        <NavLink to="/home" className="touch-link">
          <p className="touch-text">
            Коснитесь
            <br />
            экрана
          </p>
        </NavLink>
      </div>
    </div>
  );
}
