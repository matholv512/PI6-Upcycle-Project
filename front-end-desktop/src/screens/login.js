import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useModal from "../layout/modal";
import "font-awesome/css/font-awesome.min.css";
import "./login.css";
import Checkbox from "@mui/material/Checkbox";
import { useAuth } from "../context/userContext";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";

export default function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { login } = useAuth();

  const handleClickRedirectToRegister = () => {
    history.push("/register");
  };

  const handleClickRedirectToHome = () => {
    history.push("/home");
  };

  const handleClickRedirectToResetPassword = () => {
    history.push("/reset-password");
  };

  const showErrorModal = () => {
    setModalVisible(true);
  };

  const hideErrorModal = () => {
    setModalVisible(false);
  };

  const validateFields = () => {
    let error = false;
    setErroUserEmail(null);
    setErroUserPassword(null);
    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    }
    if (!userPassword) {
      setErroUserPassword("O campo senha é obrigatório");
      error = true;
    }

    return !error;
  };

  const userLogin = async () => {
    if (userEmail && userPassword) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          if (validateFields()) {
            const response = await login({
              user_email: userEmail,
              user_password: userPassword,
            });

            if (response) {
              handleClickRedirectToHome();
            } else {
              showErrorModal();
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    } else {
      validateFields();
    }
  };

  return (
    <div className="containerLogin">
      <div>
        {useModal(
          isModalVisible,
          hideErrorModal,
          "Usuário ou senha incorretos",
          "Tentar novamente"
        )}
        <div>
          <h1 style={{ color: "green" }}>Login</h1>
          <div className="body-email">
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
              className="input-login"
            />
            <p style={{ color: "red" }}>{erroUserEmail}</p>
          </div>
          <div className="body-password">
            <TextField
              type="password"
              id="outlined-multiline-flexible"
              label="Senha"
              placeholder="Digite sua senha"
              variant="filled"
              color="success"
              onChange={(e) => setUserPassword(e.target.value)}
              style={erroUserPassword ? { borderColor: "red" } : null}
              className="input-login"
            />
            <p style={{ color: "red" }}>{erroUserPassword}</p>
          </div>
          <div className="body-bottom">
            <div>
              <text
                className="text-esqueceu-senha"
                onClick={handleClickRedirectToResetPassword}
                disabled={isLoading}
              >
                Esqueceu sua senha ?
              </text>
            </div>
            <div className="card-acessar">
              <div onClick={userLogin} disabled={isLoading}>
                <Button color="success" variant="contained">
                  Entrar
                </Button>
              </div>
            </div>
            <div>
              <div className="body-register">
                <text>Não tem uma conta?</text>
                <text
                  className="text-register"
                  onClick={handleClickRedirectToRegister}
                  disabled={isLoading}
                >
                  Registre-se aqui
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
