import React from "react";
import "./materials.css"

export default function Clothes() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="mainTitle">Roupas</h1>
          <p className="text">
            Roupas podem ser doadas, reutilizadas ou recicladas de diversas maneiras.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Roupas:</h5>
          <p className="text">
            1 - Considere doar roupas em bom estado para instituições de caridade.
          </p>
          <p className="text">
            2 - Se as roupas não estiverem em condições de doação, procure pontos de reciclagem têxtil.
          </p>
          <p className="text">
            3 - Repense o consumo de moda e opte por opções sustentáveis.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A doação de roupas ajuda aqueles que estão em situação de vulnerabilidade.
          </p>
          <p className="text">
            A reciclagem de têxteis reduz a quantidade de resíduos nos aterros sanitários.
          </p>
        </div>
      </div>
    </div>
  );
}
