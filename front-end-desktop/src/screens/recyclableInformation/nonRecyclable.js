import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function NonRecyclable() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}}/>
          <h1 className="mainTitle">Não recicláveis</h1>
          <p className="text">
            Existem materiais que não são recicláveis e devem ser descartados corretamente para evitar a poluição do meio ambiente. Alguns exemplos de materiais não recicláveis incluem plásticos de uso único, papel sujo, guardanapos e papéis higiênicos usados, entre outros.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Materiais Não Recicláveis:</h5>
          <p className="text">
            1 - Identifique os materiais não recicláveis que você possui.
          </p>
          <p className="text">
            2 - Verifique as orientações do seu município ou região sobre o descarte adequado desses materiais.
          </p>
          <p className="text">
            3 - Utilize os serviços de coleta regular de resíduos para descartar corretamente os materiais não recicláveis.
          </p>
          <p className="text">
            4 - Procure estar sempre atualizado sobre as diretrizes de descarte de resíduos na sua região.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            O descarte adequado de materiais não recicláveis evita a contaminação do meio ambiente e contribui para a preservação da natureza.
          </p>
          <p className="text">
            A conscientização sobre o descarte correto de resíduos não recicláveis é fundamental para reduzir a poluição e promover a sustentabilidade.
          </p>
        </div>
      </div>
    </div>
  );
}
