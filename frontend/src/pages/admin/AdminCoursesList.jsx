import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import { api } from "../../services/api";

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
  }

  return (
    <AdminLayout sidebar={<AdminSidebar />}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Cursos</h1>
        <Link to="/admin/cursos/novo" className="rounded-lg bg-[#192927] px-4 py-2 text-white">+ Novo curso</Link>
      </div>

      {loading ? <div>Carregando…</div> : (
        <ul className="divide-y divide-gray-100">
          {items.map((c) => (
            <li key={c.id} className="flex items-center justify-between py-5">
              <span className="text-lg">{c.title}</span>
              <div className="flex gap-2">
                <Link to={`/admin/cursos/${c.id}/editar`} className="rounded-md bg-[#142825] px-3 py-2 text-white">Editar</Link>
                <button onClick={() => handleDelete(c.id)} className="rounded-md bg-[#142825] px-3 py-2 text-white">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </AdminLayout>
  );
}