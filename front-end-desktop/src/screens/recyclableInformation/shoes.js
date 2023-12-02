import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Shoes() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}}/>
          <h1 className="mainTitle">Calçados</h1>
          <p className="text">
            Os calçados podem ser doados, reutilizados ou reciclados de diversas
            maneiras.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Calçados:</h5>
          <p className="text">
            1 - Considere doar calçados em bom estado para instituições de
            caridade.
          </p>
          <p className="text">
            2 - Se os calçados não estiverem em condições de doação, procure
            pontos de reciclagem específicos.
          </p>
          <p className="text">
            3 - Repense o consumo de calçados e opte por opções sustentáveis.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A doação de calçados ajuda aqueles que estão em situação de
            vulnerabilidade.
          </p>
          <p className="text">
            A reciclagem de calçados reduz a quantidade de resíduos nos aterros
            sanitários.
          </p>
        </div>
      </div>
    </div>
  );
}
