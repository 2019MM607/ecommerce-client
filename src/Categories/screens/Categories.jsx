export const Categories = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/4 m-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoría</th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Lácteos</td>
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
              <th>2</th>
              <td>Panadería</td>
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
              <th>3</th>
              <td>Vegetales</td>
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
