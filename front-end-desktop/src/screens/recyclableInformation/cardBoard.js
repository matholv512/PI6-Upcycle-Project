import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Cardboard() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="action" onClick={handleGoBack} style={{cursor: "pointer", marginBottom: 5}} />
          <h1 id="mainTitle">Papelão</h1>
          <p className="text">
            O papelão é um material versátil frequentemente utilizado em
            embalagens.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Papelão:</h5>
          <p className="text">
            1 - Desmonte as caixas de papelão antes de descartar.
          </p>

          <p className="text">
            2 - Remova fitas adesivas e qualquer material não papeloide.
          </p>

          <p className="text">
            3 - Descarte em recipientes de coleta seletiva ou postos de
            reciclagem.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem de papelão reduz a necessidade de cortar mais árvores.
          </p>

          <p className="text">
            Diminui o volume de resíduos em aterros sanitários.
          </p>
        </div>
      </div>
    </div>
  );
}
