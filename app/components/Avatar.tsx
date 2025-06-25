"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined; // Optional prop for the image source
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
