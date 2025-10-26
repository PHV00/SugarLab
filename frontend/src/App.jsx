import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Courses from "./pages/Courses.jsx";
import AdminHome from "./pages/admin/AdminHome.jsx";            // ✅ relativo
import AdminCoursesList from "./pages/admin/AdminCoursesList.jsx";
import AdminCourseForm from "./pages/admin/AdminCourseForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Navigate to="/cursos" replace />} />
        <Route path="/cursos" element={<Courses />} />

        {/* Admin provisório + CRUD */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/cursos" element={<AdminCoursesList />} />
        <Route path="/admin/cursos/novo" element={<AdminCourseForm />} />
        <Route path="/admin/cursos/:id/editar" element={<AdminCourseForm />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/cursos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
