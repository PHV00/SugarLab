import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import { api } from "../../services/api";
import "./AdminCoursesList.css";

export default function AdminCoursesList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try { setItems(await api.listCourses()); }
    finally { setLoading(false); }
  }
  useEffect(() => { load(); }, []);

  async function handleDelete(id) {
    if (!confirm("Excluir este curso?")) return;
    await api.deleteCourse(id);
    await load();
    window.location.href = "/admin/cursos";
  }

  return (
    <AdminLayout sidebar={<AdminSidebar />}>
      <div className="admin-home-container mb-6 flex items-center justify-between">
        <Link to="/admin/cursos/novo" className="rounded-lg bg-[#192927] px-4 py-2 text-white">+ Novo curso</Link>
      </div>

      {loading ? <div className="loading-message">Carregando…</div> : (
        <ul className="divide-y divide-gray-100">
          {items.map((c) => (
            <li key={c.id} className="courseNameButtons flex items-center justify-between py-5">
              <span className="text-lg">{c.title}</span>
              <div className="btnsManageCourse flex gap-2">
                <Link to={`/admin/cursos/${c.id}/editar`} className=" btnEditCourse rounded-md bg-[#142825] px-3 py-2 text-white">Editar</Link>
                <button onClick={() => handleDelete(c.id)} className="btnDeleteCourse rounded-md bg-[#142825] px-3 py-2 text-white">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </AdminLayout>
  );
}