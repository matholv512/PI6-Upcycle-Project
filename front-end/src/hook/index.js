import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/adapter/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
  
    const login = async (userEmail, userPassword) => {
        try {

            const dataReq = {
              user_email: userEmail,
              user_password: userPassword
            }

            const { HOST_KEY } = process.env;
            const response = await axios.post(`${HOST_KEY}/login`, dataReq, {
              responseType: "json",
            });
            
            const token = response?.data?.token;
            const userAuth = response?.data?.user;

            setUser(userAuth);
            setToken(token);
      
            return Promise.all([
                await AsyncStorage.setItem('token', token),
                await AsyncStorage.setItem('userId', userAuth?.id?.toString()),
                await AsyncStorage.setItem('userEmail', userAuth.user_email),
                await AsyncStorage.setItem('userName', userAuth.user_name)
            ]);
        } catch (error) {
          console.error('Erro ao realizar o login:', error);
          throw new Error('Erro ao realizar o login');
        }
    };

    const logout = async () => {
        try {
          await AsyncStorage.removeItem('token');
          setUser(null);
        } catch (error) {
          console.error('Erro ao realizar o logout:', error);
          throw new Error('Erro ao realizar o logout');
        }
    };

    const register = async (userName, userEmail, userPassword) => {
        const { HOST_KEY } = process.env;
        const data = await axios.post(`${HOST_KEY}/user`, {
            user_name: userName,
            user_email: userEmail,
            user_password: userPassword,
          });

        setUser(data?.data?.user)
        setToken(data?.data?.user?.token)
    }

    useEffect(() => {
      if (token) {
        setUser(token);
      }
    }, [token]);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
          register
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