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
        width={300}
        height={300}
        priority
      />
      {/* Desktop/Tablet: logo.png */}
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        src="/images/logo.png"
        className="hidden sm:block cursor-pointer sm:w-auto sm:h-10 md:h-12"
        width={400}
        height={400}
        priority
      />
    </>
  );
};

export default Logo;
