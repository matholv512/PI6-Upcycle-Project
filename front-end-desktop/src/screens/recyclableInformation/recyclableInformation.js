import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./recyclableInformation.css";
import Back from '@mui/icons-material/ArrowBack';

export default function RecyclableInformation() {
  const history = useHistory();

  const handleClickRedirectTo = (route) => {
    history.push(route);
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const materials = [
    { name: "Papel", bgColor: "#1565C0" },
    { name: "Plástico", bgColor: "#E53935" },
    { name: "Metais", bgColor: "#EDC968" },
    { name: "Vidro", bgColor: "#999" },
    { name: "Pilhas e Baterias", bgColor: "#FF5722" },
    { name: "Eletrônicos", bgColor: "#9C27B0" },
    { name: "Óleo Vegetal", bgColor: "#FF9800" },
    { name: "Biodegradáveis", bgColor: "#78D921" },
    { name: "Vidro Marrom", bgColor: "#543923" },
    { name: "Papelão", bgColor: "#7D5534" },
    { name: "Roupas", bgColor: "#455C66" },
    { name: "Vidro Verde", bgColor: "#306B1C" },
    { name: "Calçados", bgColor: "#8E233A" },
    { name: "Resíduos", bgColor: "#616161" },
    { name: "Vidro Branco", bgColor: "#DEDEDE" },
    { name: "Não Reciclável", bgColor: "#333" },
  ];

  const handleGoBack = () => {
    history.push('/reciclaveis');
  };

  return (
    <div className="container">
      <div className="header">
        <Back color="success" onClick={handleGoBack} />
        <h1 className="title">Materiais Recicláveis</h1>
      </div>
      <h5 className="text">Aprenda aqui a separar cada tipo de material!</h5>
      <div className="formContainer">
        <div className="cards-container">
          {materials.map((material, index) => (
            <div
              key={index}
              className={`div card text-white bg-${material.bgColor} mb-3 custom-card`}
              style={{ backgroundColor: material.bgColor }}
              onClick={() =>
                handleClickRedirectTo(`/${removeAccents(material.name.toLowerCase().replace(/ /g, "_"))}`)
              }
            >
              <div className="card-body">
                <h4 className="card-title">{material.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
