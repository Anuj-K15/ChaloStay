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
  socialLogin?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  fullWidth = true,
  socialLogin = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover-opacity-80 transition 
        ${fullWidth ? "w-full" : "min-w-[120px]"} 
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}   
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-1.5 md:py-2"}
        ${small ? "text-xs" : "text-xs md:text-sm"}
        ${small ? "font-light" : "font-medium"}
        ${small ? "border-[1px]" : "border-[1px]"}
        ${socialLogin && Icon ? "pl-7" : ""}
      `}
    >
      {Icon && (
        <Icon
          size={16}
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        />
      )}
      <span className={`${socialLogin && Icon ? "truncate block w-full" : ""}`}>
        {label}
      </span>
    </button>
  );
};

export default Button;
