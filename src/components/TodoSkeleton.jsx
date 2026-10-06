import PropTypes from "prop-types";

const LINE_WIDTHS = ["60%", "75%", "50%", "68%"];

// Placeholder rows that mimic TodoItem while the todos load.
// Hidden from assistive tech: the loading message is what gets announced.
export default function TodoSkeleton({ count = 4 }) {
  return (
    <ul className="todo-list" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <li key={`skeleton-${i}`} className="todo todo--skeleton">
          <span className="skeleton skeleton--box" />
          <span className="skeleton skeleton--line" style={{ width: LINE_WIDTHS[i % LINE_WIDTHS.length] }} />
        </li>
      ))}
    </ul>
  );
}

TodoSkeleton.propTypes = {
  count: PropTypes.number,
};