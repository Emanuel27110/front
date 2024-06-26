import React, { useContext, useEffect } from 'react';
import { HistoryContext } from '../../context/ControlContext';

const History = () => {
  const { history, getHistory } = useContext(HistoryContext);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Acción</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record, index) => (
            <tr key={index}>
              <td>{record.user.username}</td>
              <td>{record.action}</td>
              <td>{record.product.name}</td>
              <td>{record.quantity}</td>
              <td>{new Date(record.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;