import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [checkUserPassword, setCheckUserPassword] = useState(null);
  const [erroUsername, setErroUsername] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [erroCheckUserPassword, setErroCheckUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickRedirectToHome = () => {
    history.push("/home");
  };

  const handleClickRedirectBack = () => {
    history.push("/login");
  };

  const validateFields = () => {
    let error = false;
    setErroUsername(null);
    setErroUserEmail(null);
    setErroUserPassword(null);
    setErroCheckUserPassword(null);

    if (!username) {
      setErroUsername("O campo usuário é obrigatório");
      error = true;
    }

    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    } else if (!isValidEmail(userEmail)) {
      setErroUserEmail("E-mail inválido. Insira um e-mail válido");
      error = true;
    }

    if (!userPassword) {
      setErroUserPassword("O campo senha é obrigatório");
      error = true;
    } else if (!isValidPassword(userPassword)) {
      setErroUserPassword(
        "A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números"
      );
      error = true;
    }

    if (!checkUserPassword) {
      setErroCheckUserPassword("O campo confirmação de senha é obrigatório");
      error = true;
    } else if (
      isCheckPasswordEqualsToPassword(userPassword, checkUserPassword)
    ) {
      setErroUserPassword("As senhas não coincidem");
      setErroCheckUserPassword("As senhas não coincidem");
      error = true;
    }

    return !error;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isCheckPasswordEqualsToPassword = (password, chkPassword) => {
    if (password !== chkPassword) {
      return true;
    }
    return false;
  };

  const saveUser = async () => {
    if (validateFields()) {
      setIsLoading(true);
    const url = `${process.env.REACT_APP_HOST_KEY}/user`;
    setTimeout(async () => {
      try {
          const response = await axios.get(url);
  
          const { data } = response;
  
          const userExists = data.find(
            (user) => user.user_name === username || user.user_email === userEmail
          );
  
          if (userExists) {
            if (userExists.user_name === username) {
              setErroUsername("Usuario já cadastrado no sistema");
            }
            if (userExists.user_email === userEmail) {
              setErroUserEmail("E-mail já cadastrado no sistema");
            }
          } else {
            await axios.post(url, {
              user_name: username,
              user_email: userEmail,
              user_password: userPassword,
            });
            handleClickRedirectToHome();
          }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000)
    }
  };


  return (
    <div>
        <div>
          <div>
            <h1>Registrar</h1>

            <label>Usuário</label>
            <input
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={erroUsername ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroUsername}</p>
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
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
              value={checkUserPassword}
              onChange={(e) => setCheckUserPassword(e.target.value)}
              style={erroCheckUserPassword ? { borderColor: "red" } : null}
            />
            <p style={{ color: "red" }}>{erroCheckUserPassword}</p>

            <div style={{ marginTop: 10 }}>
              <button onClick={saveUser} disabled={isLoading}>
                Registrar
              </button>

              <button onClick={handleClickRedirectBack} disabled={isLoading}>
                Voltar
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
