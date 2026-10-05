import { useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function TodoForm({ t, onAdd, disabled }) {
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef(null);
  const inputId = useId();
  const errorId = useId();

  const handleSubmit = (event) => {
    event.preventDefault(); // stops the page from refreshing
    const accepted = onAdd(value);
    setInvalid(!accepted);
    if (accepted) setValue("");
    inputRef.current?.focus(); // ready for the next todo without clicking
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    if (invalid) setInvalid(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className="visually-hidden">{t.newTodo}</label>
      <div className="form__row">
        <input
          ref={inputRef}
          id={inputId}
          name="title"
          type="text"
          className="input"
          value={value}
          onChange={handleChange}
          placeholder={t.placeholder}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : undefined}
          maxLength={120}
          autoComplete="off"
          disabled={disabled}
        />
        <Button variant="primary" type="submit" disabled={disabled}>
          {t.add}
        </Button>
      </div>
      {invalid && <p id={errorId} className="form__error" role="alert">{t.emptyTitle}</p>}
    </form>
  );
}

TodoForm.propTypes = {
  t: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};