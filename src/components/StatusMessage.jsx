import PropTypes from "prop-types";
import Button from "./Button";
import TodoSkeleton from "./TodoSkeleton";

export default function StatusMessage({ t, status, onRetry }) {
  if (status === "loading") {
    return (
      <>
        <p className="status" role="status">{t.loading}</p>
        <TodoSkeleton />
      </>
    );
  }
  return (
    <div className="status status--error" role="alert">
      <p>{t.error}</p>
      <Button variant="primary" onClick={onRetry}>{t.retry}</Button>
    </div>
  );
}

StatusMessage.propTypes = {
  t: PropTypes.object.isRequired,
  status: PropTypes.oneOf(["loading", "error"]).isRequired,
  onRetry: PropTypes.func.isRequired,
};