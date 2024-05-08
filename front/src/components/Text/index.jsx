import React from "react";

const sizes = {
  xs: "text-base font-normal",
  s: "text-2xl font-medium md:text-[22px]",
  md: "text-[32px] font-medium md:text-3xl sm:text-[28px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-200 font-firacode ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
