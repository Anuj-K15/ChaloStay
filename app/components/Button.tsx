"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  fullWidth?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  fullWidth = true,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover-opacity-80 transition 
        ${fullWidth ? "w-full" : "w-auto"} 
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}   
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-2 sm:py-3"}
        ${small ? "text-xs sm:text-sm" : "text-sm sm:text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={20}
          className="
                absolute left-2 sm:left-4 top-2 sm:top-3
                "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
