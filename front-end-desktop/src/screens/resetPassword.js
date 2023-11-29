import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useModal from "../layout/modal";

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
    <div>
      {useModal(isModalVisible, hideErrorModal, "Uma senha temporária foi enviada, verifique seu e-mail", "Ok")}
      <div>
        <div>
          <h1>Resetar senha</h1>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={erroUserEmail ? { borderColor: "red" } : null}
          />
          <p style={{ color: "red" }}>{erroUserEmail}</p>

          <button
            onClick={() => {
              showErrorModal();
              validateFields();
            }}
          >
            Enviar
          </button>

          <button
            onClick={handleClickRedirectBack} 
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
