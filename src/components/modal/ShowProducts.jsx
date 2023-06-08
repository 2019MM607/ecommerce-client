export const ShowProducts = ({ cerrarModal }) => {
  return (
    <dh-component>
      <div
        class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Orden ID: 1
              </h1>
              <button className="btn btn-square" onClick={cerrarModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Queso</td>
                    <td>4</td>
                    <td>$4.99</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Pan</td>
                    <td>2</td>
                    <td>$1.98</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Panqueques</td>
                    <td>1</td>
                    <td>$3.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </dh-component>
  );
};
