import "./Jogo.css";
import clouds from "../../../assets/clouds.png";
import mario from "../../../assets/mario.gif";
import pipe from "../../../assets/pipe.png";
import React, { useState } from "react";

function Jogo() {
  console.log("Componente de Jogo Renderizado")

  const [estaPulando, setEstaPulando] = useState(false);

  document.onkeydown = function () {
    console.log("On Key Down");

    setEstaPulando(true);

    setTimeout(function () {
      setEstaPulando(false);
    }, 700);
  };


  let marioClassName = "mario";

  if (estaPulando) {
    marioClassName = "mario mario-pulo"
  }

  console.log(15, { estaPulando });

  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="Nuvens" />
      
      <img className={marioClassName} src={mario} alt="Mário" />
      
      <img className="pipe" src={pipe} alt="Pipe"/>

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;