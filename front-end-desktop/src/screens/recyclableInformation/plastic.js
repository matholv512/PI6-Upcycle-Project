import React from "react";
import "./materials.css";

export default function Plastic() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="mainTitle">Plástico</h1>
          <p className="text">
            O plástico é um material polimérico sintético, produzido a partir de
            compostos orgânicos, como o petróleo. Pode ser reciclado, mas nem
            todos os tipos de plástico possuem a mesma capacidade de reciclagem.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Plástico:</h5>
          <p className="text">
            1 - Separe os plásticos secos dos demais resíduos.
          </p>
          <p className="text">
            2 - Verifique o tipo de plástico através do símbolo de reciclagem
            presente na embalagem.
          </p>
          <p className="text">
            3 - Descarte o plástico no recipiente apropriado para sua
            reciclagem, caso haja coleta seletiva na sua região.
          </p>
          <p className="text">
            4 - Caso não haja coleta seletiva, procure por pontos de reciclagem
            específicos para plástico em sua cidade.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            O descarte inadequado de plástico contribui para a poluição do meio
            ambiente, especialmente dos oceanos.
          </p>
          <p className="text">
            Animais marinhos podem ingerir plástico ou ficar presos em resíduos
            plásticos, causando danos à vida selvagem.
          </p>
          <p className="text">
            A reciclagem de plástico reduz a extração de matéria-prima e a
            quantidade de resíduos enviados para aterros sanitários.
          </p>
        </div>
      </div>
    </div>
  );
}
