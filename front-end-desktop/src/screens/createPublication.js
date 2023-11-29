import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CreatePublication() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [midia, setMidia] = useState(null);
  const [erroTitle, setErroTitle] = useState(null);
  const [erroMidia, setErroMidia] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [midiaType, setMidiaType] = useState(null);

  const validateFields = () => {
    let error = false;
    setErroTitle(null);
    setErroMidia(null);
    if (!title) {
      setErroTitle("O campo título é obrigatório");
      error = true;
    }
    if (!midia) {
      setErroMidia("Selecionar uma mídia é obrigatório");
      error = true;
    }

    return !error;
  };

  function IsVideoExtension(fileName) {
    if (fileName) {
      if (fileName.toString().toLowerCase().endsWith(".mp4")) {
        setMidiaType("video");
      } else if (fileName.toString().toLowerCase().endsWith(".avi")) {
        setMidiaType("video");
      } else {
        setMidiaType("imagem");
      }
    }
  }

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

  const userId = 1;
  const savePublication = async () => {
    if (title && midia && (midiaType === "video" || midiaType === "imagem")) {
      setIsLoading(true);
      try {
        if (validateFields()) {
          const base64Midia = await convertMidiaToBase64(midia);
          const url = `${process.env.REACT_APP_HOST_KEY}/publication/${userId}`;
          const response = await axios.post(url, {
            publ_title: title,
            publ_description: description,
            publ_midia: base64Midia,
            publ_like: 0,
            publ_midia_type: midiaType,
          });
        }
        // handleClickRedirectToHome();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    IsVideoExtension(midia);
  }, [midia]);

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

  return (
    <div>
      <div >
        <div>
          <h1 >Criar publicação</h1>
          <label >Título</label>
          <input
            type="text"
            placeholder="Digite o título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          />
          <p >{erroTitle}</p>
          <label >Descrição</label>
          <textarea
            placeholder="Digite a descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
          />

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

          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <button  onClick={() => savePublication()}>
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//     container: {
//       // Adicione estilos de contêiner se necessário
//     },
//     formContainer: {
//       // Adicione estilos para o contêiner do formulário se necessário
//     },
//     title: {
//       fontSize: 25,
//       fontWeight: "bold",
//       color: "green",
//       marginBottom: 35,
//     },
//     input: {
//       padding: 10,
//       marginVertical: 10,
//       width: "100%",
//       borderRadius: 10,
//       borderColor: "green",
//       backgroundColor: "#FFF",
//     },
//     erroInput: {
//       padding: 10,
//       marginVertical: 10,
//       width: "100%",
//       borderRadius: 10,
//       borderColor: "red",
//       backgroundColor: "#FFF",
//     },
//     button: {
//       backgroundColor: "green",
//       padding: 10,
//       width: 100,
//       borderRadius: 10,
//       color: "white",
//       marginTop: 10,
//     },
//     textLabel: {
//       textAlign: "left",
//       justifyContent: "flex-start",
//       alignItems: "flex-start",
//       color: "black",
//       fontSize: 14,
//     },
//     erroMessage: {
//       marginTop: -5,
//       marginBottom: 5,
//       color: "red",
//       fontSize: 12,
//     },
//     highlightedArea: {
//       backgroundColor: "#ECECEC",
//       borderRadius: 10,
//       padding: 6,
//       borderWidth: 1,
//       borderColor: "gray",
//       borderStyle: "dashed",
//     },
//     imagePreview: {
//       width: 300,
//       height: 270,
//       marginVertical: 10,
//       borderRadius: 8,
//       alignSelf: "center",
//       borderWidth: 1,
//       borderColor: "green",
//     },
//     imageArea: {
//       backgroundColor: "#ECECEC",
//       borderRadius: 10,
//       justifyContent: "center",
//       alignItems: "center",
//       padding: 10,
//     },
//   };