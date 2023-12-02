/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import NavbarItem from "./navBarItem";
import Logo from "../assets/logo/SVG/upcycle(1).svg";
import { useAuth } from "../context/userContext";

function Navbar() {
  const {user, usuarioAutenticado, logout, filtered} = useAuth();
  const [pesquisa, setPesquisa] = useState(null);

  useEffect(() => {
    const validateUser = async() => {
        await usuarioAutenticado();
    }
    validateUser()
  },[])

  const userLogout = async() => {
    await logout();
  }

  const handleSubmit = () => {
    console.log("chegou aqui")
    filtered(pesquisa);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={Logo} width={100} height={40} alt="upcycle_logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor04"
          aria-controls="navbarColor04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            <NavbarItem href="/home" label="Home" />
            {
              user && <NavbarItem href="/criar_publicacao" label="Publicar" />
            }
            <NavbarItem href="/reciclaveis" label="Reciclaveis" />
            {
              !user ? 
              (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Entrar
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Com Google
                    </a>
                    <a className="dropdown-item" href="#">
                      Com Reddit
                    </a>
                    <a className="dropdown-item" href="/login">
                      Com Email
                    </a>
                  </div>
                </li>
              ) :
              (
                <div className="d-flex align-items-center justify-content-center">
                  <a style={{cursor: 'pointer', color: "#000000A6"}} onClick={userLogout}>
                    Sair
                  </a>
                </div>
              )
            }
            
          </ul>
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Pesquisar"
              onChange={(e) => setPesquisa(e.target.value)}
              style={{width: '20%'}}
            />
            <button className="btn btn-primary my-2 my-sm-0" onClick={() => handleSubmit()}>
              Pesquisar
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
