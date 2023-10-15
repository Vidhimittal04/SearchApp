import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const variants = {
  fill: {
    light_blue_50: "bg-light_blue-50 text-black-900",
    black_900: "bg-black-900 text-white-A700",
    purple_50_01: "bg-purple-50_01 text-black-900",
    light_blue_800: "bg-light_blue-800 text-white-A700",
  },
  outline: {
    light_blue_800:
      "border border-light_blue-800 border-solid text-light_blue-800",
  },
};
const sizes = { xs: "p-2", sm: "p-[11px]", md: "p-5", lg: "p-[26px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_50",
    "black_900",
    "purple_50_01",
    "light_blue_800",
  ]),
};

export { Button };
