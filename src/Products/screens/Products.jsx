import { useEffect, useState } from "react";
import { AddProduct } from "../../components/modal/AddProduct";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { api } from "../../api/api";
import Oval from "react-loading-icons/dist/esm/components/oval";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    const { data } = await api.get("products");
    data ? setProducts(data) : setProducts([]);
  };

  useEffect(() => {
    loadProducts();
    setIsLoading(false);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-3/4 m-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Stock</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Oval stroke="#0d6efd" />
            ) : (
              products.map((category) => (
                <>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-24 h-24 rounded-full">
                            <img src={category?.image} alt="Producto" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{category?.name}</div>
                          <div className="text-sm opacity-50">
                            $ {category?.price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="py-1 px-2 bg-green-100 text-xs font-bold text-green-800 rounded-lg flex justify-center">
                        {category?.stock}
                      </div>
                    </td>
                    <td>{category?.description}</td>
                    <td>
                      <div className="py-1 px-2 bg-gray-200 text-xs font-bold rounded-lg flex justify-center">
                        {category?.category.name}
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">
                        <div className="w-6 h-6">
                          <img src="/src/images/editar.png" />
                        </div>
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-ghost btn-xs">
                        <div className="w-6 h-6">
                          <img src="/src/images/trash.png" />
                        </div>
                      </button>
                    </th>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        style={{ marginLeft: 1375, marginTop: 100 }}
        className="fixed"
        onClick={() => setOpen(!open)}
      >
        <AddIcon />
      </Fab>
      {
        // Modal

        open && (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-neutral/80 flex justify-center items-center">
            <AddProduct setOpen={setOpen} />
          </div>
        )
      }
    </div>
  );
};
