import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function GreenGlass() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="action" onClick={handleGoBack} style={{cursor: "pointer", marginBottom: 5}}/>
          <h1 id="mainTitle">Vidro Verde</h1>
          <p className="text">
            O vidro verde é utilizado principalmente para embalagens de alimentos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Vidro Verde:</h5>
          <p className="text">
            1 - Lave o vidro verde para remover resíduos de alimentos.
          </p>
          <p className="text">
            2 - Separe-o dos outros tipos de vidro para facilitar a reciclagem.
          </p>
          <p className="text">
            3 - Descarte em recipientes de coleta seletiva de vidro.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem do vidro verde economiza recursos naturais.
          </p>
          <p className="text">
            Reduz a necessidade de produção de novas embalagens de vidro.
          </p>
        </div>
      </div>
    </div>
  );
}
