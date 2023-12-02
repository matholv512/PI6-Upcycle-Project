import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useModal from "../layout/modal";
import "./resetPassword.css";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";

export default function ResetPassword() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const showErrorModal = () => {
    if (userEmail) {
      setModalVisible(true);
    }
  };

  const hideErrorModal = () => {
    setModalVisible(false);
  };

  const validateFields = () => {
    let error = false;
    setErroUserEmail(null);
    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    }

    return !error;
  };

  const handleClickRedirectBack = () => {
    history.push("/login");
  };

  return (
    <div className="container-reset-password">
      {useModal(
        isModalVisible,
        hideErrorModal,
        "Uma senha temporária foi enviada, verifique seu e-mail",
        "Ok"
      )}
      <div>
        <div>
          <h1 style={{ color: "green" }}>Resetar senha</h1>
          <div className="body-reset-email">
            <label>E-mail</label>
            <TextField
              type="email"
              id="outlined-multiline-flexible"
              label="E-mail"
              placeholder="Digite seu e-mail"
              variant="filled"
              color="success"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={erroUserEmail ? { borderColor: "red" } : null}
              className="input-email"
            />
            <p style={{ color: "red" }}>{erroUserEmail}</p>
          </div>

          <div className="container-button">
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                showErrorModal();
                validateFields();
              }}
              className="text-button"
            >
              Enviar
            </Button>

            <Button
              style={{marginLeft: 5}}
              color="error"
              variant="contained"
              onClick={handleClickRedirectBack}
              className="text-button"
            >
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
