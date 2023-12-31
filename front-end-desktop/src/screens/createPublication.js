import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import { Button, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FileIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "../context/userContext";


export default function CreatePublication() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [midia, setMidia] = useState(null);
  const [erroTitle, setErroTitle] = useState(null);
  const [erroMidia, setErroMidia] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [midiaType, setMidiaType] = useState(null);
  const [midiaName, setMidiaName] = useState(null);
  const history = useHistory();
  const { user } = useAuth();

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

  const handleClickRedirectToHome = () => {
    history.push({
      pathname: "/home",
    });
  };

  const savePublication = async () => {
    if (title && midia && (midiaType === "video" || midiaType === "imagem")) {
      setIsLoading(true);
      try {
        if (validateFields()) {
          const base64Midia = await convertMidiaToBase64(midia);
          const url = `${process.env.REACT_APP_HOST_KEY}/publication/${user.id}`;
          const response = await axios.post(url, {
            publ_title: title,
            publ_description: description,
            publ_midia: base64Midia,
            publ_like: 0,
            publ_midia_type: midiaType,
          });
        }
        handleClickRedirectToHome();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    IsVideoExtension(midiaName);
  }, [midia, midiaName]);

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
      IsVideoExtension(file.name);
      setMidiaName(file.name);
    });
  };

  return (
    <div className="col-md-12">
      <div style={{ padding: 20 }}>
        <h1 className="m-3" style={{ color: "green" }}>Criar publicação</h1>
        <Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Título"
            placeholder="Digite o título"
            maxRows={6}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ minWidth: "100%" }}
            variant="filled"
            color="success"
          />
          <p>{erroTitle}</p>
          <TextField
            className="mt-1"
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            placeholder="Digite a descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            variant="filled"
            sx={{
              minWidth: "100%",
            }}
            color="success"
          />
          <br />
          <div className="mt-3">
            <Button
              color="success"
              variant="outlined"
              onClick={handleSelectMidia}
              startIcon={<FileIcon />}
            >
              Selecione uma Imagem ou Vídeo
            </Button>
            {midia ? <Button
              className="m-4"
              color="error"
              variant="outlined"
              style={{ alignSelf: "flex-end" }}
              onClick={() => setMidia(null)}
              startIcon={<DeleteIcon />}
            >
              Remover
            </Button> : null}

          </div>
          {midia ? (
            <div sx={{ width: 80, minHeight: 80 }}>

              {midia && midiaType && midiaType === "video" ?
                <div sx={{ width: 150, margin: 6 }}>
                  <video controls src={midia} width={450} height={400} alt="Preview" />
                </div>
              : <div sx={{ width: 150, margin: 6 }}>
              <img src={midia} width={450} height={400} alt="Preview" />
            </div>}
            </div>
          ) : null}

          <div
            className="col-md-12 mt-3"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <Button
              color="success"
              variant="contained"
              onClick={() => savePublication()}
              endIcon={<SendIcon />}
            >
              Publicar
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
