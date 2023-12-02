import React from "react";
import "./materials.css"
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function Glass() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}}/>
          <h1 className="mainTitle">Vidro</h1>
          <p className="text">
            O vidro é um material reciclável infinitamente, sem perder suas propriedades. Garrafas, frascos e embalagens de vidro podem ser reciclados para produzir novos produtos de vidro.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Vidro:</h5>
          <p className="text">
            1 - Separe o vidro dos demais resíduos.
          </p>
          <p className="text">
            2 - Remova tampas e rótulos das embalagens de vidro.
          </p>
          <p className="text">
            3 - Descarte o vidro nos recipientes de coleta seletiva de vidro da sua região.
          </p>
          <p className="text">
            4 - Tome cuidado para não quebrar o vidro ao descartá-lo.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem de vidro economiza energia, reduz a extração de matérias-primas e evita o acúmulo de resíduos em aterros sanitários.
          </p>
          <p className="text">
            Além disso, o vidro reciclado pode ser usado na fabricação de novas embalagens, reduzindo a demanda por vidro virgem.
          </p>
        </div>
      </div>
    </div>
  );
}
