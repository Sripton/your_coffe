import React, { useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import group from "../../assets/Group.png";
import cofe from "../../assets/category_Drink/cofe.png";
import tea from "../../assets/category_Drink/tea.png";
import milk from "../../assets/category_Drink/milk.png";
import mors from "../../assets/category_Drink/mors.png";
import espresso from "../../assets/ cofeCard/espresso.png";
import espresso2x from "../../assets/ cofeCard/espresso2x.png";
import americano from "../../assets/ cofeCard/americano.png";
import latte from "../../assets/ cofeCard/latte.png";
import capuchino from "../../assets/ cofeCard/capuchino.png";
import makiato from "../../assets/ cofeCard/makiato.png";

export default function Home() {
  const [chooseCategory, setChooseCategory] = useState(false);
  const chooseCategoryHandler = () => {
    setChooseCategory(!chooseCategory);
  };
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header-title">Выбор напитка</h1>
        <div className="login-btn">
          <img src={group} alt="group" />
          <NavLink to="/signin" className="login">
            {" "}
            Вход /
          </NavLink>
          <NavLink to="/signup" className="login">
            {" "}
            Pегистрация
          </NavLink>
        </div>
      </div>
      <div className="content">
        <div className="categories">
          <button type="button" className="category">
            <img src={cofe} alt="cofe" />
            <p> Кофе</p>
          </button>
          <button type="button" className="category">
            <img src={tea} alt="tea" />
            <p>Чай</p>
          </button>
          <button type="button" className="category">
            <img src={milk} alt="milkcoktail" />
            <p>Молочные коктейли</p>
          </button>
          <button type="button" className="category">
            <img src={mors} alt="mors" />
            <p>Морсы и газ. напитки </p>
          </button>
        </div>

        <div className="coffee-title">
          <span />
          <p>Кофе</p>
        </div>

        <div className="grid">
          <div className="card">
            <img src={espresso} alt="espresso" />
            <p>Эспрессо</p>
            <span className="price"> от 100 руб.</span>
          </div>
          <div className="card">
            <img src={espresso2x} alt="espresso2x" />
            <span className="badge">2X</span>
            <p>Эспрессо 2X</p>
            <span className="price"> от 100 руб.</span>
          </div>
          <div className="card">
            <img src={americano} alt="americano" />
            <p>Американо</p>
            <span className="price"> от 100 руб.</span>
          </div>
          <div className="card">
            <img src={latte} alt="latte" />
            <p>Латте</p>
            <span className="price"> от 100 руб.</span>
          </div>
          <div className="card">
            <img src={capuchino} alt="capuchino" />
            <p>Капучино</p>
            <span className="price"> от 100 руб.</span>
          </div>
          <div className="card">
            <img src={makiato} alt="makiato" />
            <p>Макиато</p>
            <span className="price"> от 100 руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
