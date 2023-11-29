import React from "react";
import "./materials.css";

export default function Trash() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="mainTitle">Resíduos</h1>
          <p className="text">
            Adequado descarte de resíduos é essencial para a preservação do
            meio ambiente.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Resíduos:</h5>
          <p className="text">
            1 - Separe os resíduos de acordo com as diretrizes locais.
          </p>
          <p className="text">
            2 - Utilize sacolas adequadas para diferentes tipos de resíduos.
          </p>
          <p className="text">
            3 - Conheça os locais de coleta seletiva e descarte corretamente.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            O descarte adequado de resíduos contribui para a saúde ambiental.
          </p>
          <p className="text">
            A reciclagem reduz a quantidade de resíduos enviados para aterros
            sanitários.
          </p>
        </div>
      </div>
    </div>
  );
}
