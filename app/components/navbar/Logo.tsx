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
        className="hidden md:block cursor-pointer"
        width={150}
        height={150}
        priority
      />
    </>
  );
};

export default Logo;
