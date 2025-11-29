import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import "./AdminHome.css";

export default function AdminHome(){
  return (
    <AdminLayout sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-semibold mb-6">Início</h1>
      <div className="flex gap-4">
        <Link to="/admin/cursos" className="rounded-xl bg-[#5ea59a] px-6 py-3 text-white font-semibold">
          Gerenciar Cursos
        </Link>
        <Link to="/cursos" className="rounded-xl bg-[#192927] px-6 py-3 text-white font-semibold">
          Vitrine
        </Link>
      </div>
    </AdminLayout>
  );
}