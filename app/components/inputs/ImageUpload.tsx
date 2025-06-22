"use client";

import { CldUploadWidget } from "next-cloudinary";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: {
    openUploadWidget: (options: Record<string, unknown>, callback: (result: unknown) => void) => void;
  };
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: CloudinaryUploadWidgetResults) => {
      if (
        result.info &&
        typeof result.info === "object" &&
        "secure_url" in result.info &&
        typeof result.info.secure_url === "string"
      ) {
        onChange(result.info.secure_url);
      }
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="ChaloStay"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-8 sm:p-12 md:p-20 border-neutral-300 flex flex-col justify-center items-center gap-2 sm:gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={30} className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"/>
            <div className="font-semibold text-sm sm:text-base md:text-lg text-center">
                Click to upload
            </div>
            {value && (
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        alt="Upload"
                        fill
                        style={{objectFit: 'cover'}}
                        src={value}
                    />
                </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
