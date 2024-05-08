import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    blue_gray_200: "border-blue_gray-200 border border-solid text-blue_gray-200",
    purple_200: "border-purple-200 border border-solid text-white-A700",
  },
};
const sizes = {
  xs: "h-[37px] pl-4 pr-[21px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "purple_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-base border border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["blue_gray_200", "purple_200"]),
};

export { Button };
