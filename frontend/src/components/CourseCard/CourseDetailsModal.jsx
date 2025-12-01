import PropTypes from "prop-types";
import { useEffect } from "react";

/* ---------------- Row ---------------- */
const Row = ({ icon, label, value }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 text-[#19302c]">{icon}</span>
    <p className="text-[16px] md:text-[17px] leading-8 text-gray-800">
      <strong className="font-semibold text-gray-900">{label}:</strong> {value}
    </p>
  </li>
);

Row.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

/* ---------------- Modal ---------------- */
export default function CourseDetailsModal({
  course,
  onClose,
  signupHref = "/assinatura",
}) {
  
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!course) return null;
  const d = course.details || {};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="
          relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl
          ring-1 ring-black/10 flex flex-col max-h-[90vh]
          animate-in fade-in-90 slide-in-from-bottom-6 duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 rounded-full p-2 text-white bg-black/40 hover:bg-black/70"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Banner */}
        {/* <div className="relative w-full aspect-[16/4] max-h-[28vh]"> */}
        <div className="relative w-full h-1/3 sm:h-1/12 md:h-[220px] overflow-hidden">
          <img
            src={course.thumbnailUrl}
            alt={course.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="overflow-y-auto px-10 sm:px-16 md:px-20 lg:px-28 py-12">
          <div className="grid gap-16 md:gap-20 md:grid-cols-2 items-start">
            {/* Coluna esquerda */}
              <div className="flex flex-col md:pr-12 !pl-12 sm:!pl-14 md:!pl-16">
              <h2 className="text-[30px] md:text-[36px] font-extrabold tracking-tight text-[#142825] mb-6">
                {course.title}
              </h2>

              <p className="text-[16px] md:text-[18px] leading-8 text-gray-700 mb-12 text-justify">
                {course.description}
              </p>

                <div className="mt-auto flex justify-center md:justify-start">
                <a
                  href={signupHref}
                  className="
                    inline-grid grid-cols-[1fr_8fr_1fr] items-center
                    px-12 py-3.5 rounded-full bg-[#19302c]
                    text-white text-[20px] font-bold
                    shadow-[0_6px_18px_rgba(0,0,0,0.25)] ring-1 ring-white/10
                    transition-colors hover:bg-[#1c3a36]
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#274f48]
                  "
                >
                  {/* Texto centralizado na coluna do meio */}
                  <span className="col-start-2 justify-self-center whitespace-nowrap">
                    Inscreva-se Agora
                  </span>

                  {/* Ícone alinhado à direita na última coluna */}
                  <svg
                    className="col-start-3 justify-self-end w-6 h-6 -mr-1 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>


              </div>
            </div>

            <div className="flex flex-col justify-start md:pl-10">
              <h3 className="text-[22px] font-semibold text-[#142825] mb-8">
                Detalhes do curso
              </h3>
              <ul className="space-y-6 text-[16px] md:text-[17px] leading-8">
                {d.dateRange && (
                  <Row icon={<CalendarIcon />} label="Data" value={d.dateRange} />
                )}
                {d.timeRange && (
                  <Row icon={<ClockIcon />} label="Horário" value={d.timeRange} />
                )}
                {d.modality && (
                  <Row icon={<LaptopIcon />} label="Modalidade" value={d.modality} />
                )}
                {d.workloadHours && (
                  <Row
                    icon={<CapIcon />}
                    label="Carga horária"
                    value={`${d.workloadHours} horas`}
                  />
                )}
                {d.includes && (
                  <Row icon={<CheckIcon />} label="Inclui" value={d.includes} />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseDetailsModal.propTypes = {
  course: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  signupHref: PropTypes.string,
};

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#19302c" strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="#19302c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#19302c" strokeWidth="2" />
    <path d="M12 7v5l3 2" stroke="#19302c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const LaptopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="5" width="16" height="10" rx="2" stroke="#19302c" strokeWidth="2" />
    <path d="M2 19h20" stroke="#19302c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 4l10 6-10 6L2 10l10-6z" stroke="#19302c" strokeWidth="2" />
    <path d="M22 10v4" stroke="#19302c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 6L9 17l-5-5"
      stroke="#19302c"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
