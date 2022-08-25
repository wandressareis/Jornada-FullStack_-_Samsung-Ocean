import "./Jogo.css";
import clouds from "../../../assets/clouds.png";
import mario from "../../../assets/mario.gif";
import pipe from "../../../assets/pipe.png";
import React, { useRef, useState } from "react";

function Jogo() {
  console.log("Componente de Jogo Renderizado")

  const [estaPulando, setEstaPulando] = useState(false);

  // Criamos as referências para acessar o css
  const marioRef = useRef();
  const pipeRef = useRef();

  function marioEstaNoPipe() {
    // Acessamos as referÊncias do mario e do cano
    const mario = marioRef.current;
    const pipe = pipeRef.current;

    if (!mario || !pipe) {
      return;
    }
    return (
      pipe.offsetLeft > mario.offsetLeft &&
      pipe.offsetLeft < mario.offsetLeft + mario.offsetLeft + mario.offsetWidth && 
      mario.offsetTop + mario.offsetHeight > pipe.offsetTop
    );
  }

  setInterval(function () {
    const valor = marioEstaNoPipe();

    console.log("Mário está no cano?", valor);
  }, 100);

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
      
      <img ref={marioRef} className={marioClassName} src={mario} alt="Mário" />
      
      <img ref={pipeRef} className="pipe" src={pipe} alt="Pipe"/>

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;