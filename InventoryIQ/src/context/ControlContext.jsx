import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UsuariosContext = createContext();

const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  // GET USUARIOS
  const getUsuarios = async () => {
    try {
      const response = await axios.get('https://back-ybrm.onrender.com/api/users');
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <UsuariosContext.Provider value={{ usuarios, getUsuarios }}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;