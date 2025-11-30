import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import Logout from "../../assets/image/Logout.png";

export default function AdminSidebar() {
  const link = ({ isActive }) =>
    `text-sm ${
      isActive ? "text-color-#578F88" : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div className="sidebar-text">
      <p>ADMINISTRAÇÃO</p>
      <NavLink to="/admin" className={link}>Início</NavLink>
      <NavLink to="/admin/cursos" className={link}>Cursos</NavLink>
      <NavLink to="/admin/cursos/novo" className={link}>Novo curso</NavLink>
      <button className="btnLogout">
        <img src={Logout} alt="Logout Icon" />
        Sair
      </button>
    </div>
  );
}
