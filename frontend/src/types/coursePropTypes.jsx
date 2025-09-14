import PropTypes from "prop-types";

export const CourseShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  thumbnailUrl: PropTypes.string, 
  category: PropTypes.string,
  level: PropTypes.string,
  priceCents: PropTypes.number,
  lessonsCount: PropTypes.number,
  durationMin: PropTypes.number,
  isPublished: PropTypes.bool,
});
