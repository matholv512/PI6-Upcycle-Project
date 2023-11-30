import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import useModal from "../layout/modal";
import 'font-awesome/css/font-awesome.min.css';
import Checkbox from '@mui/material/Checkbox';

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
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-50 mt-4">
        {useModal(isModalVisible, hideErrorModal, "Usuário ou senha incorretos", "Tentar novamente")}
        <div className="container text-center">


          <div className="login-box">
           <div className="login-logo">

              <h4>Login</h4>

            </div>
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Entrar com login e senha</p>

                <form method="post">

                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      style={erroUserEmail ? { borderColor: "red" } : null} />
                    <p style={{ color: "red" }}>{erroUserEmail}</p>


                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="fa fa-envelope" style={{ fontSize: "1.5em" }}></i>
                      </div>

                    </div>
                  </div>
                  <div className="input-group input-group-md mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Senha"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      style={erroUserPassword ? { borderColor: "red" } : null}

                    />
                    <p style={{ color: "red" }}>{erroUserPassword}</p>
                    <div className="input-group-append">
                      <div className="input-group-text">
                      <i className="fa fa-lock" style={{ fontSize: "1.5em" }}></i>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="icheck-primary">
                      <Checkbox defaultChecked />
                        <label htmlFor="remember">Lembrar senha</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <button type="submit" className="btn btn-primary btn-block">
                        Entrar
                      </button>
                    </div>
                  </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                  <p>- OU -</p>
                  <a href="#" className="btn btn-block btn-primary mb-3">
                    Entrar com Reddit
                  </a><br/>
                  <a href="#" className="btn btn-block btn-danger">
                    Entrar com Google
                  </a>
                </div>
                <p className="mb-1">
                  <a onClick={handleClickRedirectToResetPassword} disabled={isLoading}
                    style={{ cursor: "pointer", marginBottom: "20px" }}>Esqueci minha senha</a>
                </p>


              </div>
            </div>
          </div>











          {/* <h1>Login</h1>
          <label>E-mail</label>
          <div>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={erroUserEmail ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroUserEmail}</p>
          </div>
          <label>Senha</label>
          <div>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              style={erroUserPassword ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroUserPassword}</p>
          </div>
          <div>

            <button className="" onClick={userLogin} disabled={isLoading}
              style={{ backgroundColor: "#0275d8", marginRight: "10px" }}>
              Entrar
            </button>

          </div>

          <div>
          <a onClick={handleClickRedirectToResetPassword} disabled={isLoading}
          style={{ cursor: "pointer", marginBottom: "20px"}}>
            Esqueceu sua senha?
          </a>
          </div>

          <div>
            <p>Não tem uma conta?</p>
            <button onClick={handleClickRedirectToRegister} disabled={isLoading}>
              Registre-se aqui
            </button>

          </div> */}
        </div>
      </div>
    </div>
  );
}
