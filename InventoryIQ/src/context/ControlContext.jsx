import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  // GET HISTORY
  const getHistory = async () => {
    try {
      const response = await axios.get('https://inventoryiq.onrender.com/api/history');
      setHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ADD HISTORY
  const addHistory = async (record) => {
    try {
      const response = await axios.post('https://inventoryiq.onrender.com/api/newHistory', record);
      setHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE HISTORY
  const deleteHistory = async (id) => {
    try {
      await axios.delete('https://inventoryiq.onrender.com/api/deleteHistory/${id}');
      setHistory(history => history.filter(record => record._id !== String(id)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <HistoryContext.Provider value={{ history, getHistory, addHistory, deleteHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;