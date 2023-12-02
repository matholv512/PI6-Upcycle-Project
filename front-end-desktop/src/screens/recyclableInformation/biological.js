import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Biological() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };
  
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}} />
          <h1 className="mainTitle">Biodegradáveis</h1>
          <p className="text">
            Materiais biodegradáveis são compostos por substâncias que podem
            se decompor naturalmente.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Biodegradáveis:</h5>
          <p className="text">
            1 - Separe os materiais biodegradáveis em um recipiente adequado.
          </p>

          <p className="text">
            2 - Evite misturar materiais não biodegradáveis no recipiente.
          </p>

          <p className="text">
            3 - Certifique-se de que os produtos biodegradáveis estão livres de
            contaminantes.
          </p>

          <p className="text">
            4 - Prefira métodos de compostagem para facilitar a decomposição.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            Contribui para a redução da quantidade de resíduos nos aterros
            sanitários.
          </p>

          <p className="text">
            A decomposição natural ajuda a minimizar o impacto ambiental.
          </p>
        </div>
      </div>
    </div>
  );
}
