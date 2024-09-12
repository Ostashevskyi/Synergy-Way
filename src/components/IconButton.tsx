import React from "react";

type IconButtonProps = {
  onClick: () => void;
  icon: string;
  children: React.ReactNode;
};

const IconButton = ({ onClick, icon, children }: IconButtonProps) => {
  return (
    <div className="flex items-center gap-2 border-l border-gray-500 p-2">
      <img src={icon} className="w-4 h-4" />
      <button className="text-text_main" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default IconButton;
