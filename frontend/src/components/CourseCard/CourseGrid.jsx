import PropTypes from "prop-types";
import CourseCard from "./CourseCard";
import CourseSkeleton from "./CourseSkeleton";

const GridWrap = ({ children }) => (
  <div
    className="
      grid
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-10 sm:gap-12
      justify-items-center
      w-full
      place-items-center
    "
  >
    {children}
  </div>
);

GridWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CourseGrid({ courses = [], isLoading = false, onMore }) {
  if (isLoading) {
    return (
      <GridWrap>
        {Array.from({ length: 6 }).map((_, i) => (
          <CourseSkeleton key={i} />
        ))}
      </GridWrap>
    );
  }

  if (!courses.length) {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center text-white/85">
        Nenhum curso disponível no momento.
      </div>
    );
  }

  return (
    <GridWrap>
      {courses.map((c) => (
        <CourseCard key={c.id ?? c.slug ?? c.title} course={c} onMore={onMore} />
      ))}
    </GridWrap>
  );
}

CourseGrid.propTypes = {
  courses: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  onMore: PropTypes.func,
};
