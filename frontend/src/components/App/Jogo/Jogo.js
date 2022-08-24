import "./Jogo.css";
import clouds from "../../../assets/clouds.png";
import mario from "../../../assets/mario.gif";
import pipe from "../../../assets/pipe.png";
function Jogo() {
  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="Nuvens"/>
      <img className="mario" src={mario} alt="Nuvens"/>
      <img className="pipe" src={pipe} alt="Pipe"/>
    </div>

  );
}

export default Jogo;