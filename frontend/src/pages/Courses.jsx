/**
 * Página: Courses
 * ---------------------------------------------------------------
 * Vitrine pública dos cursos:
 *  - Apresenta Header e Footer padrão do site
 *  - Busca cursos publicados da API
 *  - Resolve URLs de imagens que estão em `src/assets/image`
 *  - Renderiza o grid de cards e o modal de detalhes
 * Estilo alinhado à identidade SugarLab (fundo, espaçamentos, tipografia).
 * ---------------------------------------------------------------
 */

import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CourseGrid from "../components/CourseCard/CourseGrid.jsx";
import CourseDetailsModal from "../components/CourseCard/CourseDetailsModal.jsx";
import { api } from "../services/api";

// --- Resolver de imagens (para arquivos em src/assets/image/*) ---
const modules = import.meta.glob("../assets/image/*", {
  eager: true,
  as: "url",
});
const resolveAssetUrl = (input) => {
  if (!input) return "/placeholder-course.jpg";
  // Já é absoluto (CDN) ou aponta para /public
  if (/^https?:\/\//i.test(input) || input.startsWith("/")) return input;
  // Match por nome de arquivo (case-insensitive)
  const name = input.replace(/^.*[\\/]/, "").toLowerCase();
  for (const p in modules) {
    const file = p.split("/").pop().toLowerCase();
    if (file === name) return modules[p];
  }
  return "/placeholder-course.jpg";
};

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

 useEffect(() => {
  (async () => {
    try {
      const data = await api.listPublishedCourses(); // GET /api/courses?status=published
      const mapped = (data || []).map((c) => ({
        ...c,
        // o grid usa "thumbnailUrl"
        thumbnailUrl: resolveAssetUrl(c.thumbnail_url || c.thumbnailUrl || ""),
        details: {
          dateRange: c.date_range,
          timeRange: c.time_range,
          modality: c.modality,
          workloadHours: c.workload_hours,
          includes: c.includes,
        },
      }));
      setCourses(mapped);
    } catch (e) {
      console.error(e);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  })();
}, []);


  return (
    <>
      <Header />

      {/* Fundo + respiro abaixo do header */}
      <main className="min-h-screen bg-[#142825] pt-28 pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Título da página */}
          <header className="mb-10 text-center"></header>

          {/* Grid de cursos */}
          <CourseGrid
            courses={courses}
            isLoading={loading}
            onMore={setSelected}
          />

          {/* Modal de detalhes */}
          {selected && (
            <CourseDetailsModal
              course={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
