import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export default function TodoList({ t, todos, onToggle, onDelete }) {
  if (todos.length === 0) return <p className="muted">{t.empty}</p>;
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeLabel={t.remove} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  t: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
