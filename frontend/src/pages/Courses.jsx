import { useEffect, useState } from "react";
import CourseGrid from "../components/CourseCard/CourseGrid.jsx";
import CourseDetailsModal from "../components/CourseCard/CourseDetailsModal.jsx";

const img = (file) => new URL(`../assets/image/${file}`, import.meta.url).href;

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Doces Finos",
          highlights: [
            "Trufas: Doces de chocolate macios e delicados.",
            "Macarons: Biscoitos franceses com amêndoas, recheados com creme.",
            "Pralinês: Doces feitos com nozes e açúcar.",
          ],
          thumbnailUrl: img("DocesFinos.jpg"),
          details: {
            dateRange: "10 a 14 de junho",
            timeRange: "18h às 21h (aulas ao vivo)",
            modality: "100% online, com acesso pela plataforma exclusiva.",
            workloadHours: 15,
            includes: "certificado digital e material de apoio.",
          },
        },
        {
          id: 2,
          title: "Pâtisserie",
          highlights: [
            "Descubra a arte da Pâtisserie.",
            "Do básico ao avançado: sobremesas clássicas e modernas.",
            "Técnicas de decoração e especialidades mundiais.",
          ],
          
          thumbnailUrl: img("Patisserie.jpg"),
          details: {
            dateRange: "24 a 28 de junho",
            timeRange: "19h às 22h",
            modality: "Online ao vivo + gravações.",
            workloadHours: 18,
            includes: "certificado digital e apostila em PDF.",
          },
        },
      ]);
      setLoading(false);
    }, 200);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-12">
      <CourseGrid courses={courses} isLoading={loading} onMore={setSelected} />
      
      {selected && <CourseDetailsModal course={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
