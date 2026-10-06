import PropTypes from "prop-types";
import TrashIcon from "./TrashIcon";

export default function TodoItem({ todo, removeLabel, onToggle, onDelete }) {
  return (
    <li className={`todo${todo.done ? " is-done" : ""}`}>
      <label className="todo__label">
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span className="todo__title">{todo.title}</span>
      </label>
      <button type="button" className="icon-btn" aria-label={`${removeLabel}: ${todo.title}`} onClick={() => onDelete(todo.id)}>
        <TrashIcon />
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  removeLabel: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
