"use client";

import { CldUploadWidget } from "next-cloudinary";
import type { CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";

declare global {
  var cloudinary: {
    openUploadWidget: (
      options: Record<string, unknown>,
      callback: (result: unknown) => void
    ) => void;
  };
}

interface ProfileImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  onChange,
  value,
}) => {
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
        cropping: true,
        croppingAspectRatio: 1,
        croppingShowDimensions: true,
        resourceType: "image",
        folder: "profiles",
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-2 border-neutral-300 flex flex-col justify-center items-center gap-1 text-neutral-600 rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          >
            {!value && (
              <>
                <FaUserCircle size={18} className="mb-0.5" />
                <div className="font-medium text-[10px] sm:text-xs text-center">
                  Add photo
                </div>
              </>
            )}
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Profile Picture"
                  fill
                  style={{ objectFit: "cover", borderRadius: "100%" }}
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

export default ProfileImageUpload;
