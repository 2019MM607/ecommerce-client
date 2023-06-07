export const Products = () => {
  return (
    <div className="flex justify-center">
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
                25
                <br />
                <span className="badge badge-ghost badge-sm">lb</span>
              </td>
              <td>Some tomatoes used as an example</td>
              <th>Vegetales</th>
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
    </div>
  );
};
