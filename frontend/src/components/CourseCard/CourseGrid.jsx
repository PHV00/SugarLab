import PropTypes from "prop-types";
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses = [], isLoading = false, onMore }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[360px] rounded-[28px] bg-white/10 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!courses.length) {
    return <div className="rounded-2xl bg-white/5 p-8 text-center text-white/70">Nenhum curso disponível.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <CourseCard key={c.id || c.title} course={c} onMore={onMore} />
      ))}
    </div>
  );
}

CourseGrid.propTypes = {
  courses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  onMore: PropTypes.func,
};
