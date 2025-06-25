"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300); // Delay to allow for animation
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full max-w-[92%] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] mx-auto my-6 h-full lg:h-auto md:h-auto">
          {/*content*/}

          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*Header*/}
              <div className="flex items-center p-3 sm:p-4 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="absolute left-2.5 sm:left-4 p-1 border-0 hover:opacity-70 transition"
                  onClick={handleClose}
                >
                  <IoMdClose size={16} />
                </button>
                <div className="text-sm sm:text-base font-semibold">
                  {title}
                </div>
              </div>
              {/* Body */}
              <div className="relative p-3 sm:p-4 flex-auto">{body}</div>
              {/* Footer */}
              <div className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4 w-full">
                <div className="flex flex-col items-center gap-2 sm:gap-2.5 w-full mx-auto">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                <div className="w-full">{footer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
