import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const link = ({ isActive }) =>
    `block px-4 py-3 text-sm rounded-lg mx-3 my-1 ${
      isActive ? "bg-[#142825] text-white" : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div className="py-4">
      <div className="px-4 pb-3 text-xs font-semibold text-gray-500">ADMINISTRAÇÃO</div>
      <NavLink to="/admin" className={link}>Início</NavLink>
      <NavLink to="/admin/cursos" className={link}>Cursos</NavLink>
      <NavLink to="/admin/cursos/novo" className={link}>Novo curso</NavLink>
      <div className="px-4 pt-3 text-xs font-semibold text-gray-500">Outros</div>
      <button className="mx-4 mt-2 text-red-500 text-sm">Logout</button>
    </div>
  );
}
