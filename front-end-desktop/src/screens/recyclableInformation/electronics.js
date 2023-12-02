import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Electronics() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="action" onClick={handleGoBack} style={{cursor: "pointer", marginBottom: 5}}/>
          <h1 id="mainTitle">Eletrônicos</h1>
          <p className="text">
            Os equipamentos eletrônicos contêm componentes valiosos e materiais prejudiciais ao meio ambiente, como metais pesados e produtos químicos. A reciclagem de eletrônicos é essencial para evitar a contaminação e recuperar materiais preciosos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Eletrônicos:</h5>
          <p className="text">
            1 - Procure pontos de coleta de eletrônicos na sua região, como postos de coleta ou empresas especializadas em reciclagem.
          </p>
          <p className="text">
            2 - Verifique se há programas de reciclagem oferecidos pelos fabricantes ou varejistas de eletrônicos.
          </p>
          <p className="text">
            3 - Antes de descartar, exclua todas as informações pessoais dos dispositivos eletrônicos.
          </p>
          <p className="text">
            4 - Evite o descarte de eletrônicos no lixo comum, pois eles podem conter substâncias nocivas.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem de eletrônicos reduz a quantidade de resíduos eletrônicos em aterros sanitários e evita a contaminação do solo e da água por metais pesados e produtos químicos.
          </p>
          <p className="text">
            Além disso, permite a recuperação de materiais valiosos, como ouro, prata e cobre, presentes nos dispositivos eletrônicos.
          </p>
        </div>
      </div>
    </div>
  );
}
