import React from "react";
import "./materials.css";

export default function BrownGlass() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="mainTitle">Vidro Marrom</h1>
          <p className="text">
            O vidro marrom é geralmente usado para embalagens de alimentos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Vidro Marrom:</h5>
          <p className="text">
            1 - Lave o vidro marrom para remover resíduos de alimentos.
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
            A reciclagem do vidro marrom economiza recursos naturais.
          </p>

          <p className="text">
            Reduz a necessidade de produção de novas embalagens de vidro.
          </p>
        </div>
      </div>
    </div>
  );
}
