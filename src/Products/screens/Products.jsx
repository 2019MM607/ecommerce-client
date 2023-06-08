import { useState } from "react";
import { AddProduct } from "../../components/modal/AddProduct";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center">
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
                      <img
                        src="https://images.pexels.com/photos/4033112/pexels-photo-4033112.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Producto"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Tomatoes</div>
                    <div className="text-sm opacity-50">$0.99 / lb</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center">
                  <div className="py-1 px-2 bg-green-100 text-xs font-bold text-green-800 rounded-lg">
                    25 lbs
                  </div>
                </div>
              </td>
              <td>Some tomatoes used as an example</td>
              <td>
                <div className="flex justify-center items-center">
                  <div className="py-1 px-2 bg-gray-200 text-xs font-bold rounded-lg">
                    Vegetales
                  </div>
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
            {/* row 2 */}
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
                      <img
                        src="https://images.pexels.com/photos/4197905/pexels-photo-4197905.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Producto"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bread</div>
                    <div className="text-sm opacity-50">$0.45 / unidad</div>
                  </div>
                </div>
              </td>
              <td>
                25
                <br />
                <span className="badge badge-ghost badge-sm">unidades</span>
              </td>
              <td>Bread used as an example</td>
              <th>Panadería</th>
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
            {/* row 3 */}
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
                      <img
                        src="https://images.pexels.com/photos/2985167/pexels-photo-2985167.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Producto"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Eggs</div>
                    <div className="text-sm opacity-50">$0.30 / unidad</div>
                  </div>
                </div>
              </td>
              <td>
                80
                <br />
                <span className="badge badge-ghost badge-sm">unidades</span>
              </td>
              <td>Some eggs used as an example</td>
              <th>Lácteos</th>
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
          </tbody>
        </table>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        style={{ marginLeft: 1200 }}
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
