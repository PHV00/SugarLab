/**
 * AdminCourseForm — cria/edita curso usando sua API Express/MySQL.
 * Campos mapeados exatamente para o backend:
 * slug, title, description, summary, thumbnail_url,
 * includes, date_range, time_range, modality, workload_hours, status.
 *
 * Observações:
 * - O select "status" vem pré-selecionado em "published" para já aparecer na vitrine.
 * - Se digitar somente o nome da imagem (ex.: "Natal.jpg"), coloque o arquivo em: src/assets/image/Natal.jpg
 */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import AdminSidebar from "./AdminSidebar.jsx";
import { api } from "../../services/api";

// slug simples a partir do título
const slugify = (s = "") =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function AdminCourseForm() {
  const { id } = useParams();
  const editing = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    summary: "",
    thumbnail_url: "",

    includes: "",
    dateRange: "",
    time_range: "",
    modality: "",
    workload_hours: "",
    status: "published", // padrão para já aparecer na vitrine
  });

  useEffect(() => {
    (async () => {
      if (!editing) return;
      // usa GET público pois sua API expõe /api/courses/:id
      const data = await api.getCoursePublic(id);
      setForm({
        title: data.title || "",
        description: data.description || "",
        summary: data.summary || "",
        thumbnail_url: data.thumbnail_url || "",
        includes: data.includes || "",
        date_range: data.date_range || "",
        time_range: data.time_range || "",
        modality: data.modality || "",
        workload_hours: data.workload_hours ?? "",
        status: data.status || "draft",
      });
    })();
  }, [editing, id]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    const payload = {
      slug: slugify(form.title),
      title: form.title?.trim(),
      description: form.description?.trim(),
      summary: form.summary?.trim(),
      thumbnail_url: form.thumbnail_url?.trim(),
      highlights: JSON.stringify(form.highlights || []),
      includes: form.includes?.trim(),
      date_range: form.date_range?.trim(),
      time_range: form.time_range?.trim(),
      modality: form.modality?.trim(),
      workload_hours: form.workload_hours ? Number(form.workload_hours) : null,
      price: 0,
      featured: 0,
      status: form.status === "published" ? "Publicado" : "Rascunho",
    };

    if (!payload.title) {
      alert("Informe o nome do curso.");
      return;
    }

    if (editing) {
      await api.updateCourse(id, payload);
    } else {
      await api.createCourse(payload);
    }

    navigate("/admin/cursos");
  }

  return (
    <AdminLayout sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-semibold mb-8">
        {editing ? "Editar Curso" : "Novo Curso"}
      </h1>

      <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-[1fr_420px]">
        {/* Coluna esquerda */}
        <div className="space-y-6">
          <L label="Nome do Curso:">
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              className="input"
            />
          </L>

          <L label="Descrição:">
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows={8}
              className="input resize-y"
            />
          </L>

          <L label="Imagem:">
            <input
              name="thumbnail_url"
              value={form.thumbnail_url}
              onChange={onChange}
              placeholder='Ex.: "Patisserie.jpg" ou URL https://...'
              className="input"
            />
          </L>
        </div>

        {/* Coluna direita com ícones */}
        <div className="space-y-4">
          <FieldWithIcon
            label="Data"
            name="date_range"
            value={form.date_range}
            onChange={onChange}
          >
            <CalendarIcon />
          </FieldWithIcon>

          <FieldWithIcon
            label="Horário"
            name="time_range"
            value={form.time_range}
            onChange={onChange}
          >
            <ClockIcon />
          </FieldWithIcon>

          <FieldWithIcon
            label="Modalidade"
            name="modality"
            value={form.modality}
            onChange={onChange}
          >
            <LaptopIcon />
          </FieldWithIcon>

          <FieldWithIcon
            label="Carga horária"
            name="workload_hours"
            value={form.workload_hours}
            onChange={onChange}
            type="number"
          >
            <CapIcon />
          </FieldWithIcon>

          <FieldWithIcon
            label="Inclui"
            name="includes"
            value={form.includes}
            onChange={onChange}
          >
            <DocIcon />
          </FieldWithIcon>

          <div className="pt-2">
            <label className="block text-sm text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={onChange}
              className="input"
            >
              <option value="published">Publicado</option>
              <option value="draft">Rascunho</option>
            </select>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="float-right rounded-md bg-[#142825] px-7 py-2.5 text-black hover:bg-[#1c3b36] active:scale-[.99] transition"
            >
              {editing ? "Salvar" : "Criar"}
            </button>
          </div>
        </div>
      </form>

      {/* utilitários locais */}
      <style>{`
        .input{
          width:100%;
          border:1px solid #d1d5db;
          border-radius:.5rem;
          padding:.55rem .75rem;
          outline:none;
        }
        .input:focus{
          box-shadow:0 0 0 2px rgba(94,165,154,.35);
          border-color:#5ea59a;
        }
      `}</style>
    </AdminLayout>
  );
}

/* ---------- auxiliares ---------- */

function L({ label, children }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

function FieldWithIcon({ label, children, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#142825] w-7 h-7 flex items-center justify-center">
          {children}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          // padding maior para não colar no ícone
          className="input pl-12"
        />
      </div>
    </div>
  );
}

/* ---------- propTypes (encerra os avisos do ESLint) ---------- */
L.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

FieldWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

FieldWithIcon.defaultProps = {
  type: "text",
};

/* ---------- ícones ---------- */
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#142825" strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="#142825" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#142825" strokeWidth="2" />
    <path d="M12 7v5l3 2" stroke="#142825" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const LaptopIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="5" width="16" height="10" rx="2" stroke="#142825" strokeWidth="2" />
    <path d="M2 19h20" stroke="#142825" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 4l10 6-10 6L2 10l10-6z" stroke="#142825" strokeWidth="2" />
    <path d="M22 10v4" stroke="#142825" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#142825" strokeWidth="2" />
    <path d="M14 2v6h6" stroke="#142825" strokeWidth="2" />
  </svg>
);
