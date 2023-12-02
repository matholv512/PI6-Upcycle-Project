import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const history = useHistory(); 

    const login = async (dados) => {
        try{
            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_HOST_KEY
            });

            const { data } = await axiosInstance.post('/login', dados);

            if (data) {
            const userData = {
                nome: data.user.user_name,
                email: data.user.user_email,
                token: data.token
            };

            setUser(userData)

            localStorage.setItem("nome", userData.nome);
            localStorage.setItem("email", userData.email);
            localStorage.setItem("token", userData.token);

            return true;
            }

            return false;
        } catch(error){
            console.log(error)
            return false;
        }
    };

    const cadastrar = async (dados) => {
        const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_HOST_KEY
        });

        const {data} = await axiosInstance.post('/user', dados);
        if (data) {
            const userData = {
                nome: data.user_name,
                email: data.user_email,
                token: data.token
            };
            
            setUser(userData)
    
            localStorage.setItem("nome", userData.nome);
            localStorage.setItem("email", userData.email);
            localStorage.setItem("token", userData.token);
        }

        return
    };

    const getUsuarios = async() => {
        const axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_HOST_KEY
        });
    
        const {data} = await axiosInstance.get('/user');

        return data;
    }

    const usuarioAutenticado = () => {
        const user = localStorage.getItem("token");
        setUser(user);
    };

    // Desafio ---> implemente um botão que chama essa função dentro da página Home
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("nome");
        localStorage.removeItem("email");
        setUser('');
        window.location.href = '/login';
    };
  
    return (
      <AuthContext.Provider
        value={{
            user, logout, login, usuarioAutenticado, cadastrar, getUsuarios
        }}
      >
          {children}
      </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };