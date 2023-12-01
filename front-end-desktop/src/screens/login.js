import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useModal from "../layout/modal";
import './login.css';
import { useAuth } from "../context/userContext";

export default function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const {login} = useAuth();

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
            const response = await login({user_email: userEmail, user_password: userPassword})

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
    <div className="container">
        <div>
          {useModal(isModalVisible, hideErrorModal, "Usuário ou senha incorretos", "Tentar novamente")}
          <div>
            <h1 style={{textAlign: "center"}}>Login</h1>
            <div className="body-email">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                style={erroUserEmail ? { borderColor: "red" } : null}
                className="input-login"
              />
              <p style={{ color: "red" }}>{erroUserEmail}</p>
            </div>
            <div className="body-password">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                style={erroUserPassword ? { borderColor: "red" } : null}
                className="input-login"
              />
              <p style={{ color: "red" }}>{erroUserPassword}</p>
            </div>
            <div className="body-bottom">
              <div>
                <text onClick={handleClickRedirectToResetPassword} disabled={isLoading}>
                  Esqueceu sua senha?
                </text>
              </div>
              <div className="card-acessar">
                <div className="body-acessar" onClick={userLogin} disabled={isLoading}>
                  <text className="text-entrar">
                    Acessar
                  </text>
                </div>
              </div>
              <div>
                <div className="body-register">
                  <text>Não tem uma conta?</text>
                  <text className="text-register" onClick={handleClickRedirectToRegister} disabled={isLoading}>
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
