import PropTypes from "prop-types";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ t, lang, onLanguageChange }) {
  return (
    <header className="header">
      <h1 id="todo-title">{t.title}</h1>
      <LanguageSwitcher lang={lang} label={t.language} onChange={onLanguageChange} />
    </header>
  );
}

Header.propTypes = {
  t: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};