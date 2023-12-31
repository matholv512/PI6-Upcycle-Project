import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function WhiteGlass() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">      
        <div className="card-body">
        <Back color="action" onClick={handleGoBack} style={{cursor: "pointer", marginBottom: 5}}/>
          <h1 id="mainTitle">Vidro Branco</h1>
          <p className="text">
            O vidro branco é comumente usado em embalagens de alimentos e
            produtos farmacêuticos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Vidro Branco:</h5>
          <p className="text">
            1 - Lave o vidro branco para remover resíduos de alimentos ou
            substâncias químicas.
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
            A reciclagem do vidro branco conserva recursos naturais.
          </p>
          <p className="text">
            Reduz a pegada de carbono associada à produção de novas embalagens.
          </p>
        </div>
      </div>
    </div>
  );
}
