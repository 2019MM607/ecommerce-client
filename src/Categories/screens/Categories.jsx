import { useEffect, useState } from "react";
import { api } from "../../api/api";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const { data } = await api.get("categories");
    data ? setCategories(data) : setCategories([]);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center">
      {/* Form */}
      <div className="w-auto h-auto py-5 px-10 flex flex-col justify-center">
        <div className="text-lg font-bold">Nueva Categoría</div>
        <form className="" action="POST">
          <div className="flex justify-left items-center">
            <label className="mr-3">Nombre de la Categoría</label>
            <input
              type="text"
              className="bg-gray-100 px-3 py-1 rounded-md focus:outline-none mr-3"
            />
            <input
              type="submit"
              className="py-1 px-3 bg-blue-900 rounded-md text-white font-semibold"
              value="Agregar"
            />
          </div>
        </form>
      </div>
      {/* Cards */}
      <div className="w-auto h-auto py-5 px-10 flex justify-center items-center grid grid-cols-5 gap-4">
        {/* Card */}
        {categories.map((category) => (
          <>
          <div className="w-30 h-auto p-3 flex flex-col justify-center items-center rounded-xl shadow-xl">
            {/* Titulo */}
            <div className="py-2 px-10">
              <div className="text-md font-bold">{category?.name}</div>
            </div>

            <div className="flex flex-row justify-center items-center">
              {/* Editar */}
              <div className="py-1 px-3 flex justify-center items-center bg-neutral rounded-lg mr-2">
                <div className="text-xs text-white">Editar</div>
              </div>
              {/* Eliminar */}
              <div className="py-1 px-3 flex justify-center items-center bg-accent rounded-lg">
                <div className="text-xs text-white">Eliminar</div>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};
