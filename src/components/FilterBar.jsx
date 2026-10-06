import PropTypes from "prop-types";
import Button from "./Button";
import { FILTER_KEYS } from "../utils/filters";

export default function FilterBar({ t, current, onChange }) {
  return (
    <div className="chip-group" role="group" aria-label={t.filters}>
      {FILTER_KEYS.map((key) => (
        <Button key={key} active={current === key} onClick={() => onChange(key)}>
          {t[key]}
        </Button>
      ))}
    </div>
  );
}

FilterBar.propTypes = {
  t: PropTypes.object.isRequired,
  current: PropTypes.oneOf(FILTER_KEYS).isRequired,
  onChange: PropTypes.func.isRequired,
};