import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Signin() {
  const [phone, setPhone] = useState("");

  const handleDigitClick = (digit) => {
    if (phone.length < 10) {
      setPhone((prev) => prev + digit);
    }
  };

  const formatPhone = (input) =>
    input.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");

  const deleteDigitClick = () => setPhone((prev) => prev.slice(0, -1));
  return (
    <div className="wrapper-register">
      <div className="container">
        <NavLink to="/home" className="back-btn">
          <span>{"<"}</span>
        </NavLink>
        <h1 className="title">Вход в акаунт</h1>
        <p className="subtitle">Введите номер телефона</p>
        <div className="phone-number">
          +7
          <span className="placeholder">
            {" "}
            {formatPhone(phone.padEnd(10, "_"))}
          </span>
        </div>
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleDigitClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button className="empty" type="button" />
          <button type="button">0</button>
          {phone.length === 0 ? (
            <button
              className="delete-btn"
              disabled
              type="button"
              onClick={deleteDigitClick}
            >
              &laquo;
            </button>
          ) : (
            <button
              className="delete-btn"
              type="button"
              onClick={deleteDigitClick}
            >
              &laquo;
            </button>
          )}
        </div>
        <button className="register-btn" type="button">
          Войти
        </button>
      </div>
    </div>
  );
}
