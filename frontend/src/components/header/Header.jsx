import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/SugarLab.png";
import HamburguerMenu from "../Icons/HamburguerMenu";
import { useState } from "react";

const Header = () => {
  const nav = [
    { label: "Cursos", path: "/cursos" },
    { label: "Comunidade", path: "/comunidade" },
    { label: "Sobre nós", path: "/sobre" },
    { label: "Assinatura", path: "/assinatura" },
    { label: "Admin", path: "/admin" }, // provisório
  ];
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `navOptions ${isActive ? "text-[#5ea59a] font-semibold underline underline-offset-4" : "hover:text-[#5ea59a]"}`;

  return (
    <nav id="headerClass" className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative z-50">
      <NavLink to="/"><img src={logo} alt="logo" className="w-28 lg:w-32" /></NavLink>

      {/* desktop */}
      <div className="hidden lg:flex gap-10 text-[#142825]">
        {nav.map(i => <NavLink key={i.path} to={i.path} className={linkCls}>{i.label}</NavLink>)}
      </div>

      <div className="hidden lg:flex gap-2">
        <button className="btnUser bg-[#192927] w-24 py-2 rounded-lg text-white font-medium shadow">Login</button>
        <button className="btnUser bg-[#5ea59a] w-24 py-2 rounded-lg text-white font-medium shadow">Register</button>
      </div>

      {/* mobile */}
      <button className="lg:hidden" onClick={() => setOpen(!open)}><HamburguerMenu/></button>
      {open && (
        <div className="absolute right-4 top-[64px] w-3/5 rounded-2xl border bg-white shadow-lg flex flex-col items-center gap-3 py-4">
          {nav.map(i => (
            <NavLink key={i.path} to={i.path} className="font-medium text-[#142825] hover:text-[#5ea59a]" onClick={()=>setOpen(false)}>
              {i.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
