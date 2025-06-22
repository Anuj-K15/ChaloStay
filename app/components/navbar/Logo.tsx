"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      {/* Mobile: logo-only.png */}
      <Image
        onClick={() => router.push("/")}
        alt="Logo Only"
        src="/images/logo-only.png"
        className="block sm:hidden cursor-pointer w-10 h-10"
        width={40}
        height={40}
        priority
      />
      {/* Desktop/Tablet: logo.png */}
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        src="/images/logo.png"
        className="hidden sm:block cursor-pointer w-24 h-10 md:w-32 md:h-12 lg:w-36 lg:h-14"
        width={150}
        height={40}
        priority
      />
    </>
  );
};

export default Logo;
