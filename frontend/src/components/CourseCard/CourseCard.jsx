import PropTypes from "prop-types";

export default function CourseCard({ course, onMore }) {
  const { title, highlights = [], thumbnailUrl } = course || {};

  return (
    <article
      className="
        group flex h-full w-full max-w-xl flex-col overflow-hidden rounded-[28px]
        bg-white text-[#141414] shadow-[0_14px_36px_rgba(0,0,0,.22)] ring-1 ring-black/5
        transition-transform hover:-translate-y-0.5
      "
    >
      {/* Texto */}
      <div className="p-6 md:p-7">
        <h3 className="font-semibold tracking-wide text-[28px] md:text-[34px] leading-tight">
          {title}
        </h3>

        {!!highlights.length && (
          <ul className="mt-3 space-y-2 list-disc pl-5 text-[15px] leading-relaxed text-[#1b1b1b]">
            {highlights.map((t, i) => (
              <li key={i} className="marker:text-[#1f3431]">{t}</li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={() => onMore?.(course)}
          className="
            mt-4 inline-flex items-center gap-2 rounded-xl bg-[#192927]
            px-4 py-2 text-white shadow-[0_3px_0_rgba(0,0,0,.35)]
            hover:bg-[#203533] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#192927] focus-visible:ring-offset-2 focus-visible:ring-offset-white
          "
        >
          Mais…
        </button>
      </div>

      {/* Imagem no rodapé do card */}
      <div className="relative mt-auto">
        <img
          src={thumbnailUrl || "/img/placeholder-course.jpg"}
          alt={title}
          className="h-48 w-full object-cover md:h-56 rounded-b-[28px]"
          onError={(e) => { e.currentTarget.src = "/img/placeholder-course.jpg"; }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 rounded-b-[28px] bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    thumbnailUrl: PropTypes.string,
    details: PropTypes.object,
  }).isRequired,
  onMore: PropTypes.func,
};
