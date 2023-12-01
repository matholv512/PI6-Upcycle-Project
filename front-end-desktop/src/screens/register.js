import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import { Button, Form } from "reactstrap";
import { TextField, ButtonGroup, Typography, Box, FormGroup } from "@mui/material";
import "../index.css"
import Logo from '../assets/logo/1x/upcycle4.png';

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
    <div className="w-100 p-5">
      <div className="card">
        <div className="card-body login-card-body">
      <Box className="box">
      <div className="text-center">
      <img src={Logo} width={100} height={80} />
        <h1 style={{color: "#2FAC66", margin: 15}}>Registrar</h1>
      </div>
      <Form className="form">
        <FormGroup className="row">
        <div className="row">
        <div className="col-md-4">
        <Typography style={{ color: "red" }}>{erroUsername}</Typography>
        <TextField className="text-field"
          label="Nome"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={erroUsername ? { borderColor: "red" } : null}
        />
        </div>
        <div className="col-md-8">
        <Typography style={{ color: "red" }}>{erroUserEmail}</Typography>
        <TextField className="text-field" 
          label="E-mail"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={erroUserEmail ? { borderColor: "red" } : null}
        />
        </div>
        </div>
        </FormGroup>

        <FormGroup className="row">
          <div className="row">
            <div className="col-md-6">
            <TextField className="text-field"
                  type="password"
                  label="Senha"
                  name="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  style={erroUserPassword ? { borderColor: "red" } : null}
                />
                <Typography style={{ color: "red" }}>{erroUserPassword}</Typography>
            </div>
            <div className="col-md-6">
            <TextField className="text-field"
                  type="password"
                  label="Confirmar senha"
                  name="confirmPassword"
                  value={checkUserPassword}
                  onChange={(e) => setCheckUserPassword(e.target.value)}
                  style={erroCheckUserPassword ? { borderColor: "red" } : null}
                />
                <Typography style={{ color: "red" }}>{erroCheckUserPassword}</Typography>
            </div>
          </div>
        </FormGroup>

        <ButtonGroup className="m-3">
          <Button className="btn" variant="primary" type="submit" onClick={saveUser} disabled={isLoading}>
            Registrar
          </Button>
          <Button className="btn" variant="secondary" onClick={handleClickRedirectBack} disabled={isLoading}>
            Cancelar
          </Button>
        </ButtonGroup>
      </Form>
      </Box>
      </div>
      </div>
    </div>
  );
}
