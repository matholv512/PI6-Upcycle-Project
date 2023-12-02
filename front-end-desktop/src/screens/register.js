import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "reactstrap";
import {
  TextField,
  ButtonGroup,
  Typography,
  Box,
  FormGroup,
} from "@mui/material";
import "../index.css";
import { useAuth } from "../context/userContext";

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [checkUserPassword, setCheckUserPassword] = useState("");
  const [erroUsername, setErroUsername] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [erroCheckUserPassword, setErroCheckUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cadastrar, getUsuarios } = useAuth();

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
      try {
        const response = await getUsuarios();

        const userExists = response.find(
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
          await cadastrar({
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
    }
  };

  return (
    <div>
      <Box style={{ padding: 20 }}>
        <div>
          <h1 style={{ color: "green" }}>Registrar</h1>
        </div>
        <Form style={{width: "100%"}}
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            saveUser();
          }}
        >
          <FormGroup style={{width: "100%"}}>
            
            <TextField
              type="text"
              id="outlined-multiline-flexible"
              label="Usuário"
              placeholder="Digite seu usuário"
              variant="filled"
              color="success"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography style={{ color: "red" }}>{erroUsername}</Typography>
            <TextField
              type="email"
              id="outlined-multiline-flexible"
              label="E-mail"
              placeholder="Digite seu e-mail"
              variant="filled"
              color="success"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={{marginTop: 13, marginBottom: 13}}
            />
            <Typography style={{ color: "red" }}>{erroUserEmail}</Typography>
            <TextField
              type="password"
              id="outlined-multiline-flexible"
              label="Senha"
              placeholder="Digite sua senha"
              variant="filled"
              color="success"
              name="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <Typography style={{ color: "red" }}>{erroUserPassword}</Typography>

            <TextField
              type="password"
              id="outlined-multiline-flexible"
              label="Confirmar senha"
              placeholder="Digite sua senha novamente"
              variant="filled"
              color="success"
              name="confirmPassword"
              value={checkUserPassword}
              onChange={(e) => setCheckUserPassword(e.target.value)}
              style={{marginTop: 13}}
            />
            <Typography style={{ color: "red" }}>
              {erroCheckUserPassword}
            </Typography>
          </FormGroup>
        </Form>
      </Box>
      <div style={{ display: "flex", marginLeft: 20 }}>
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          style={{ backgroundColor: "#2e7d32", border: 0 }}
          onClick={() => saveUser()}
        >
          Registrar
        </Button>
        <Button
          variant="contained"
          onClick={handleClickRedirectBack}
          disabled={isLoading}
          style={{ marginLeft: 5, backgroundColor: "#d32f2f", border: 0 }}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
