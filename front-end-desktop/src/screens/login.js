import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useModal from "../layout/modal";

export default function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

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
            const url = `${process.env.REACT_APP_HOST_KEY}/user`;
            const response = await axios.get(url, {
              responseType: "json",
            });
            const { data } = response;

            const user = data.find(
              (user) =>
                user.user_email === userEmail &&
                user.user_password === userPassword
            );

            if (user) {
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
    <div>
        <div>
          {useModal(isModalVisible, hideErrorModal, "Usuário ou senha incorretos", "Tentar novamente")}
          <div>
            <h1>Login</h1>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={erroUserEmail ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroUserEmail}</p>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              style={erroUserPassword ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroUserPassword}</p>
            <div>
              <button onClick={userLogin} disabled={isLoading}>
                Entrar
              </button>
              <button onClick={handleClickRedirectToResetPassword} disabled={isLoading}>
                Esqueceu sua senha?
              </button>
            </div>
            <div>
              <p>Não tem uma conta?</p>
              <button onClick={handleClickRedirectToRegister} disabled={isLoading}>
                Registre-se aqui
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
