import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-primary text-2xl font-bold">
          Panel Administrador
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg">
            <Link to="/categories">Categorias</Link>
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
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="src\images\user.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content p-2 shadow-md bg-base-100 rounded-box w-52">
          <li>
            <a className="text-neutral font-semibold">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
