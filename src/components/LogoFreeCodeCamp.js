import React from "react";
import logoFreeCodeCamp from "../images/freecodecamp-logo2.png";
import "../css/LogoFreeCodeCamp.css";
function LogoFreeCodeCamp() {
  return (
    <div className="logo-contenedor">
      <img
        src={logoFreeCodeCamp}
        className="freecodecamp-logo"
        alt="Logo Free Code Camp"
      />
    </div>
  );
}

export default LogoFreeCodeCamp;
