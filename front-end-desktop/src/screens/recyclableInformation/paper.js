import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Paper() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">      
        <div className="card-body">
        <Back color="action" onClick={handleGoBack} style={{cursor: "pointer", marginBottom: 5}}/>
          <h1 id="mainTitle">Papel</h1>
          <p className="text">
            O papel é produzido a partir de fibras vegetais e pode ser reciclado facilmente.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Papel:</h5>
          <p className="text">
            1 - Separar os papeis secos em uma sacola plástica.
          </p>
          <p className="text">
            2 - Inclua caixas de papelão desmontadas.
          </p>
          <p className="text">
            3 - De preferência, não rasgar ou amassar o papel.
          </p>
          <p className="text">
            4 - Não incluir papeis sujos de gordura, amanteigado ou parafinado.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            Reduz a poluição atmosférica causada pela queima de papel.
          </p>
          <p className="text">
            Se descartado incorretamente, contribui para o aumento de resíduos nos Aterros Sanitários.
          </p>
          <p className="text">
            A reciclagem diminui o uso de recursos hídricos na poluição do material.
          </p>
        </div>
      </div>
    </div>
  );
}
