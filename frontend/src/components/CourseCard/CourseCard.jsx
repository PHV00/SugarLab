/**
 * Componente: CourseCard
 * ---------------------------------------------------------------
 * Mostra um card de curso na vitrine:
 *  - Imagem de capa (proporção 4:3, com fallback)
 *  - Título em plaquinha (com largura limitada para não colar na borda)
 *  - Botão "Ver detalhes" que abre o modal via onMore(course)
 * ---------------------------------------------------------------
 */

import PropTypes from "prop-types";

export default function CourseCard({ course, onMore }) {
  const { title, thumbnailUrl } = course || {};

  return (
    <article
      className="
        group relative w-full max-w-[400px] aspect-[4/3]
        overflow-hidden rounded-[28px]
        ring-1 ring-black/10 shadow-lg shadow-black/20
        bg-[#0f1f1d] transition-transform duration-300
        hover:-translate-y-1.5 hover:shadow-xl
        focus-within:-translate-y-1.5
      "
    >
      {/* Imagem */}
      <img
        src={thumbnailUrl || "/placeholder-course.jpg"}
        alt={title ? `Capa do curso ${title}` : "Capa do curso"}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/placeholder-course.jpg";
        }}
      />

      {/* Gradiente sutil para contraste */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Plaquinha + botão com respiro e responsividade */}
      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        {/* Plaquinha do título (limita largura p/ não encostar) */}
        <span
          className="
            inline-flex items-center rounded-2xl
            text-[24px] font-semibold tracking-wide shadow-lg
            backdrop-blur-sm
            max-w-[70%]
          "
          title={title}
        >
          {title}
        </span>

        {/* CTA: Ver detalhes */}
        <button
          type="button"
          onClick={() => onMore?.(course)}
          className="
            rounded-xl px-5 py-2.5
            text-[16px] font-semibold text-[#ffffff]
            shadow-md focus:outline-none
            focus-visible:ring-2
            transition-all
            self-start sm:self-auto
          "
          aria-label={`Ver detalhes de ${title}`}
        >
          Ver detalhes
        </button>
      </div>

      {/* Borda de foco acessível */}
      <span className="pointer-events-none absolute inset-0 rounded-[28px] ring-[#5ea59a]/40 ring-0 group-focus-within:ring-2" />
    </article>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
  onMore: PropTypes.func,
};
