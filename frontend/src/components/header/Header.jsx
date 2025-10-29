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

export default Header;