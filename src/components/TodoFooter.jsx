import PropTypes from "prop-types";

export default function TodoFooter({ t, count }) {
  return (
    <footer className="footer">
      <p aria-live="polite">{t.itemsLeft(count)}</p>
    </footer>
  );
}

TodoFooter.propTypes = {
  t: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};