import React from "react";
import "./materials.css";
import Back from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

export default function VegetableOil() {
  const history = useHistory();


  const handleGoBack = () => {
    history.push('/sobre_reciclaveis');
  };

  return (
    <div className="container">
      <div className="card">      
        <div className="card-body">
        <Back color="success" onClick={handleGoBack} style={{cursor: "pointer"}}/>
          <h1 className="mainTitle">Óleo Vegetal</h1>
          <p className="text">
            O óleo vegetal usado é altamente poluente quando descartado
            incorretamente. No entanto, ele pode ser reciclado e transformado em
            biocombustível ou utilizado na produção de sabão e outros produtos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Como descartar Óleo Vegetal:</h5>
          <p className="text">
            1 - Armazene o óleo vegetal usado em recipientes vedados, como
            garrafas pet.
          </p>
          <p className="text">
            2 - Procure pontos de coleta de óleo vegetal usado na sua região,
            como postos de coleta ou supermercados.
          </p>
          <p className="text">
            3 - Despeje o óleo vegetal usado nos recipientes de coleta
            específicos.
          </p>
          <p className="text">
            4 - Evite despejar o óleo no ralo ou no lixo, pois pode causar
            entupimentos e poluir a água.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="textTitle">Impactos:</h5>
          <p className="text">
            A reciclagem do óleo vegetal usado evita a poluição da água e do
            solo, além de contribuir para a produção de biocombustível e outros
            produtos sustentáveis.
          </p>
          <p className="text">
            O descarte correto do óleo vegetal usado também ajuda a evitar
            problemas de saúde pública, como o entupimento de redes de esgoto.
          </p>
        </div>
      </div>
    </div>
  );
}
