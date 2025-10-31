
import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CourseGrid from "../components/CourseCard/CourseGrid.jsx";
import CourseDetailsModal from "../components/CourseCard/CourseDetailsModal.jsx";
import { api } from "../services/api";

const modules = import.meta.glob("../assets/image/*", {
  eager: true,
  as: "url",
});
const resolveAssetUrl = (input) => {
  if (!input) return "/placeholder-course.jpg";
  if (/^https?:\/\//i.test(input) || input.startsWith("/")) return input;
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
      <main className="min-h-screen bg-[#142825] flex flex-col items-center justify-start pb-20">
     <div className="h-6"></div> 
     <div className="w-full max-w-7xl px-10 flex flex-col items-center text-white">
     <div className="h-2"></div>
     <h1 className="text-4xl font-bold mb-4 text-center">Nossos Cursos</h1>
     <p className="text-lg text-white/80 leading-relaxed text-center max-w-4xl mx-auto mb-16">
      Explore nossas opções e aprenda técnicas incríveis para transformar sua
      paixão pela confeitaria em arte.
     </p>
    <div className="h-5"></div>

    <CourseGrid
      courses={courses}
      isLoading={loading}
      onMore={setSelected}
    />

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