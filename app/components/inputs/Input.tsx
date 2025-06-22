"use client";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
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
        <BiRupee size={20} className="text-neutral-700 absolute top-4 sm:top-5 left-2" />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-3 sm:p-4 pt-5 sm:pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base
        ${formatPrice ? "pl-8 sm:pl-9" : "pl-3 sm:pl-4"} 
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm sm:text-md duration-150 transform -translate-y-3 top-4 sm:top-5 z-10 origin-[0] 
        ${formatPrice ? "left-8 sm:left-9" : "left-3 sm:left-4"} 
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:-translate-y-3 peer-focus:scale-75 
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
