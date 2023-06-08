export const AddProduct = () => {
  return (
    <dh-component>
      <div
        class="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div class="w-full flex justify-start text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-basket-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
              </svg>
            </div>
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Agregar un producto nuevo
            </h1>
            {/* Inicio nombre producto */}
            <label
              for="product-name"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Nombre del producto
            </label>
            <input
              id="product-name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Queso"
            />
            {/* Fin nombre producto */}
            <div className="flex items-center">
              {/* Inicio precio producto */}
              <div className="flex flex-col mr-5">
                <label
                  for="price"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Precio
                </label>
                <div class="relative mb-5 mt-2">
                  <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                  </div>
                  <input
                    id="price"
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                    placeholder="0.00"
                  />
                </div>
              </div>
              {/* Fin precio producto */}

              {/* Inicio stock producto */}
              <div className="flex flex-col w-[50%]">
                <label
                  for="stock"
                  class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Stock
                </label>
                <div class="relative mb-5 mt-2">
                  <input
                    id="stock"
                    class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-[100%] h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="25"
                  />
                </div>
              </div>
              {/* Fin stock producto */}
            </div>
            {/* Inicio imagen producto */}
            <label
              for="image"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Imagen
            </label>
            <div class="relative mb-5 mt-2">
              <input
                id="image"
                class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="https://www.example.com/image.jpg"
              />
            </div>
            {/* Fin imagen producto */}
            {/* Inicio descripción producto */}
            <label
              for="description"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Descripción
            </label>
            <div class="relative mb-5 mt-2">
              <input
                id="description"
                class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Descripción del producto"
              />
            </div>
            {/* Fin descripción producto */}
            {/* Inicio categoría producto */}
            <label
              for="category"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Categoría
            </label>
            <div class="relative mb-5 mt-2">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Selecciona la categoría
                </option>
                <option>Vegetales</option>
                <option>Lácteos</option>
                <option>Panadería</option>
              </select>
            </div>
            {/* Fin categoría producto */}
            <div class="flex items-center justify-start w-full">
              <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onclick=""
              >
                Cancel
              </button>
            </div>
            <button
              class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onclick="modalHandler()"
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center py-12" id="button">
        <button
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          onclick="modalHandler(true)"
        >
          Open Modal
        </button>
      </div>
    </dh-component>
  );
};
