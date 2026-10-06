import PropTypes from "prop-types";
import Button from "./Button";
import { LANGUAGES } from "../i18n/translations";

export default function LanguageSwitcher({ lang, label, onChange }) {
  return (
    <nav className="chip-group" aria-label={label}>
      {Object.entries(LANGUAGES).map(([code, { label: text }]) => (
        <Button key={code} active={lang === code} lang={code} onClick={() => onChange(code)}>
          {text}
        </Button>
      ))}
    </nav>
  );
}

LanguageSwitcher.propTypes = {
  lang: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};