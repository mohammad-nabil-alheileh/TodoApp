import PropTypes from "prop-types";

export default function Button({ variant = "chip", active = false, type = "button", children, ...rest }) {
  const className = `btn btn--${variant}${active ? " is-active" : ""}`;
  return (
    <button type={type} className={className} aria-pressed={variant === "chip" ? active : undefined} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["chip", "primary"]),
  active: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.node.isRequired,
};
