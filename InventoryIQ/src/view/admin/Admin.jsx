import { Container } from "react-bootstrap";
import FormProductos from "../../components/forms/FormProductos";
import TablaProductos from "../../components/tablas/TablaProductos";
import TableUsuarios from "../../components/table/TableUsuarios.jsx";
import TablaConsultas from "../../components/tablas/TablaConsultas";
import History from "../../components/Control/History.jsx";

const Admin = () => {
  return (
    <>
      <Container>
        <h3 className="p-3 mt-3">Registrar productos</h3>
        <FormProductos />

        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Tabla de productos:</h3>
          <TablaProductos />
        </div>
        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Historial de Movimientos</h3>
          <History />
        </div>

        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Usuarios registrados:</h3>
          <TableUsuarios />
        </div>

        <div className="p-3 mt-3">
          <h3 className="p-3 mt-3">Tabla de consultas:</h3>
          <TablaConsultas />
        </div>
      </Container>
    </>
  );
};

export default Admin;
