import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Batteries() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}} />
          <h1 className="mainTitle">Pilhas e baterias</h1>
          <p className="text">
            Pilhas e baterias contêm materiais tóxicos e metais pesados, como
            mercúrio, chumbo e cádmio, que podem ser prejudiciais ao meio
            ambiente se descartados incorretamente. Portanto, requerem cuidado
            especial no descarte e reciclagem.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">
            Como descartar Pilhas e Baterias:
          </h5>
          <p className="text">
            1 - Não descarte pilhas e baterias no lixo comum.
          </p>

          <p className="text">
            2 - Procure pontos de coleta específicos para pilhas e baterias na
            sua região.
          </p>

          <p className="text">
            3 - Muitos estabelecimentos comerciais, como supermercados e lojas
            de eletrônicos, possuem recipientes de coleta para pilhas e
            baterias.
          </p>

          <p className="text">
            4 - Se possível, opte por pilhas recarregáveis, que reduzem a
            quantidade de resíduos gerados.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem de pilhas e baterias evita a contaminação do solo e da
            água por metais pesados.
          </p>

          <p className="text">
            Além disso, permite a recuperação de materiais valiosos presentes
            nas pilhas e baterias, como metais e componentes químicos.
          </p>
        </div>
      </div>
    </div>
  );
}
