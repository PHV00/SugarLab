/**
 * Layout: AdminLayout
 * Moldura com Header/Footer, fundo verde-escuro e container branco arredondado.
 */
import PropTypes from "prop-types";
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AdminLayout({ sidebar, children }) {
  return (
    <div className="flex w-full min-h-screen">
      {/* sidebar fixa */}
      <div className="border-gray-100 bg-white w-[260px]">{sidebar}</div>

      {/* conteúdo ocupa TODO o espaço restante */}
      <div className="flex-1 bg-white p-10">
        {children}
      </div>
    </div>
  );
}
AdminLayout.propTypes = { sidebar: PropTypes.node, children: PropTypes.node };
