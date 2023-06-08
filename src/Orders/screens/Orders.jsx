import { api } from "../../api/api";
import { ShowProducts } from "../../components/modal/ShowProducts";
import { useState, useEffect } from "react";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const loadOrders = async () => {
    const { data } = await api.get("orders");
    data ? setOrders(data) : setOrders([]);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const cerrarModal = () => {
    setOpen(false);
  };
  
  return (
    <div className="mt-10 overflow-x-auto flex justify-center items-center">
      <table className="table table-xs w-3/4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <>
            <tr className="hover">
            <th>{order?.id}</th>
            <td>{order?.user.name}</td>
            <td>{order?.createdAt}</td>
            <td>$ {order?.total}</td>
            <td className="pl-6 ">
              <div onClick={() => setOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
              </div>
            </td>
          </tr>
            </>
          ))}
          
        </tbody>
      </table>
      {open && (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-neutral/80 flex justify-center items-center">
          <ShowProducts cerrarModal={cerrarModal} />
        </div>
      )}
    </div>
  );
};
