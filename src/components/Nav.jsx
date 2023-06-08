import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-primary text-2xl font-bold">
          Panel Administrador
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg">
            <Link to="/categories">Categorías</Link>
          </li>
          <li className="text-lg">
            <Link to="/products">Productos</Link>
          </li>
          <li className="text-lg">
            <Link to="/orders">Pedidos</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="flex justify-center items-center btn btn-ghost btn-circle avatar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            className="bi bi-person-fill fill-[#333c4d]"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content p-2 shadow-md bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="text-neutral font-semibold">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
