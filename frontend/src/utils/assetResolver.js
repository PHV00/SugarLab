// Mapeia TUDO que estiver em src/assets/image/* para uma URL final gerada pelo Vite
const modules = import.meta.glob("../assets/image/*", {
  eager: true,
  as: "url",
});

// Recebe algo como "Patisserie.jpg" ou "assets/image/Patisserie.jpg"
// e devolve a URL final. Se vier http/https já retorna como está.
export function resolveAssetUrl(input) {
  if (!input) return "/placeholder-course.jpg";

  // absoluto (CDN, etc.)
  if (/^https?:\/\//i.test(input)) return input;

  // pega só o nome do arquivo (ignora pastas)
  const filename = input.replace(/^.*[\\/]/, "").toLowerCase();

  // procura no mapa do Vite
  for (const path in modules) {
    const file = path.split("/").pop().toLowerCase();
    if (file === filename) return modules[path];
  }

  return "/placeholder-course.jpg";
}
