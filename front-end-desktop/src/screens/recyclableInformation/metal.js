import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Metal() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}}/>
          <h1 className="mainTitle">Metais</h1>
          <p className="text">
            O metal é um material amplamente reciclado devido à sua durabilidade e capacidade de ser fundido e remodelado. Alguns exemplos de metais recicláveis incluem alumínio, ferro, cobre e aço.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Metal:</h5>
          <p className="text">
            1 - Separe os metais dos demais resíduos.
          </p>
          <p className="text">
            2 - Verifique se há pontos de coleta seletiva de metal na sua região.
          </p>
          <p className="text">
            3 - Caso não haja coleta seletiva, procure por empresas de reciclagem de metal na sua cidade.
          </p>
          <p className="text">
            4 - Evite misturar diferentes tipos de metais, pois podem exigir processos de reciclagem diferentes.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem de metal reduz a necessidade de extração de minérios, economizando energia e recursos naturais.
          </p>
          <p className="text">
            Além disso, a reciclagem de metal contribui para a redução do volume de resíduos e a preservação do meio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
}
