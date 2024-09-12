import React from "react";

const ControlsButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      {...props}
      className={`${className} w-[30px] h-[30px] flex items-center justify-center hover:bg-hover_button`}
    >
      {children}
    </button>
  );
};

export default ControlsButton;
