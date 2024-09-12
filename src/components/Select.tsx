import React from "react";

const Select = ({
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
}) => {
  return (
    <select
      {...props}
      className={`form-select bg-transparent border rounded-md appearance-none focus:outline-none ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;
