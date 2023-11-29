import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RecyclableClassifier = () => {
  const history = useHistory();
  const [midia, setMidia] = useState(null);
  const [erroMidia, setErroMidia] = useState(null);
  const [identifiedClass, setIdentifiedClass] = useState(null);

  const handleIdentifiedClassRedirectToRecyclableMaterial = () => {
    if (identifiedClass === 0) {
      history.push("pilhas_e_baterias");
    } else if (identifiedClass === 1) {
      history.push("biodegradaveis");
    } else if (identifiedClass === 2) {
      history.push("vidro_marrom");
    } else if (identifiedClass === 3) {
      history.push("papelao");
    } else if (identifiedClass === 4) {
      history.push("roupas");
    } else if (identifiedClass === 5) {
      history.push("vidro_verde");
    } else if (identifiedClass === 6) {
      history.push("metais");
    } else if (identifiedClass === 7) {
      history.push("papel");
    } else if (identifiedClass === 8) {
      history.push("plastico");
    } else if (identifiedClass === 9) {
      history.push("calcados");
    } else if (identifiedClass === 10) {
      history.push("residuos");
    } else if (identifiedClass === 11) {
      history.push("vidro_branco");
    }
  };

  const handleClickRedirectToRecyclabeInformation = () => {
    history.push("/sobre_reciclaveis");
  };

  const validateFields = () => {
    let error = false;
    setErroMidia(null);
    if (!midia) {
      setErroMidia("Selecionar uma imagem é obrigatório");
      error = true;
    }
    return !error;
  };

  const handleSelectMidia = async () => {
    setErroMidia(null);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,video/*";
    input.click();

    input.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      const selectedMidia = URL.createObjectURL(file);
      setMidia(selectedMidia);
    });
  };

  const convertMidiaToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const base64Midia = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
    return base64Midia;
  };

  const classifyImage = async () => {
    if (midia) {
      try {
        const base64Midia = await convertMidiaToBase64(midia);

        const { REACT_APP_API_PYTHON_KEY } = process.env;
        const response = await axios.post(
          `${REACT_APP_API_PYTHON_KEY}/classify`,
          {
            image: {
              base64: base64Midia,
            },
          }
        );

        if (response.data.class) {
          setIdentifiedClass(response.data.class);
          handleIdentifiedClassRedirectToRecyclableMaterial();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Classificador de materiais recicláveis</h1>
      <p>
        Envie uma imagem do material reciclável e forneceremos informações
        importantes sobre ele.
      </p>
      <div>
      <button onClick={handleSelectMidia} >
            Selecione uma Imagem ou Vídeo
          </button>

          {erroMidia ? <p >{erroMidia}</p> : null}
          {midia ? (
            <div >
              <button
                style={{ alignSelf: "flex-end" }}
                onClick={() => setMidia(null)}
              >
                Remover
              </button>
              {midia && <img src={midia}  alt="Preview" />}
            </div>
          ) : null}
      </div>
      <div>
        <button onClick={classifyImage}>Classificar</button>
      </div>
      <p>Para visualizar informações sobre todos os materiais</p>
      <button
        onClick={handleClickRedirectToRecyclabeInformation}
        style={{ color: "green" }}
      >
        Clique aqui!
      </button>
    </div>
  );
};

export default RecyclableClassifier;
