import PropTypes from "prop-types";
import { useEffect } from "react";

const Row = ({ icon, label, value }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 text-[#19302c]">{icon}</span>
    <p className="text-[16px] leading-relaxed">
      <strong className="font-semibold">{label}:</strong> {value}
    </p>
  </li>
);
Row.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default function CourseDetailsModal({ course, onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xl"
      onClick={onClose} // fecha clicando fora
      role="dialog"
      aria-modal="true"
    >
      <div
        className="
          relative w-full max-w-2xl rounded-[28px] bg-white text-[#121212]
          shadow-[0_40px_90px_rgba(0,0,0,.5)] ring-1 ring-black/10
          animate-in fade-in duration-200
        "
        onClick={(e) => e.stopPropagation()} // não fechar ao clicar no conteúdo
      >
        {/* Header */}
        <div className="px-6 md:px-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] md:text-[36px] font-semibold">{course.title}</h2>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="rounded-full p-2 hover:bg-black/5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="#1c2c29" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <div className="mt-3 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6">
          <ul className="space-y-4">
            {d.dateRange && <Row icon={<CalendarIcon />} label="Data" value={d.dateRange} />}
            {d.timeRange && <Row icon={<ClockIcon />} label="Horário" value={d.timeRange} />}
            {d.modality && <Row icon={<LaptopIcon />} label="Modalidade" value={d.modality} />}
            {d.workloadHours && <Row icon={<CapIcon />} label="Carga horária" value={`${d.workloadHours} horas`} />}
            {d.includes && <Row icon={<CheckIcon />} label="Inclui" value={d.includes} />}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onClose}
              className="rounded-xl border border-black/10 px-5 py-2 hover:bg-black/5"
            >
              Voltar
            </button>
            <button
              className="rounded-xl bg-[#192927] text-white px-6 py-2 hover:bg-[#203533] shadow-[0_6px_16px_rgba(25,41,39,.35)]"
            >
              Assinar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
CourseDetailsModal.propTypes = {
  course: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

/* Ícones */
function CalendarIcon(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="17" rx="2" stroke="#19302c" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#19302c" strokeWidth="2" strokeLinecap="round"/></svg>);}
function ClockIcon(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#19302c" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="#19302c" strokeWidth="2" strokeLinecap="round"/></svg>);}
function LaptopIcon(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="10" rx="2" stroke="#19302c" strokeWidth="2"/><path d="M2 19h20" stroke="#19302c" strokeWidth="2" strokeLinecap="round"/></svg>);}
function CapIcon(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4l10 6-10 6L2 10l10-6z" stroke="#19302c" strokeWidth="2"/><path d="M22 10v4" stroke="#19302c" strokeWidth="2" strokeLinecap="round"/></svg>);}
function CheckIcon(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#19302c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);}
