import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import "./AdminHome.css";

export default function AdminHome(){
  return (
    <AdminLayout sidebar={<AdminSidebar />}>
      <div className="admin-home-container flex gap-4">
        <Link to="/admin/cursos" className="manage-courses bg-[#5ea59a] px-6 py-3 text-white font-semibold">
          Gerenciar Cursos
        </Link>
        <Link to="/cursos" className="vitrine-courses rounded-xl bg-[#192927] px-6 py-3 text-white font-semibold">
          Vitrine
        </Link>
      </div>
    </AdminLayout>
  );
}