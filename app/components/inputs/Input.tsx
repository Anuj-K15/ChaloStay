"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiRupee } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  required,
  disabled,
  formatPrice,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiRupee size={18} className="text-neutral-700 absolute top-3 left-2" />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-2 sm:p-3 pt-4 sm:pt-5 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-sm
        ${formatPrice ? "pl-7 sm:pl-8" : "pl-2.5 sm:pl-3.5"} 
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        htmlFor={id}
        className={`absolute text-xs sm:text-sm duration-150 transform -translate-y-3 top-3 sm:top-4 z-10 origin-[0] 
        ${formatPrice ? "left-7 sm:left-8" : "left-2.5 sm:left-3.5"} 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:-translate-y-3 peer-focus:scale-75 
        ${errors[id] ? "text-rose-500-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
