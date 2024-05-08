import React from "react";

const sizes = {
  s: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-firacode ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
