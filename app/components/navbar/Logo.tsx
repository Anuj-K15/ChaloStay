"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ footer }) => {
  const router = useRouter();

  return (
    <>
      {/* Mobile: logo-only.png */}
      <Image
        onClick={() => router.push("/")}
        alt="Logo Only"
        src="/images/logo-only.png"
        className={`${
          footer ? "" : "block sm:hidden"
        } cursor-pointer w-11 h-11`}
        width={300}
        height={300}
        priority
      />
      {/* Desktop/Tablet: logo.png - hidden in footer */}
      {!footer && (
        <Image
          onClick={() => router.push("/")}
          alt="Logo"
          src="/images/logo.png"
          className="hidden sm:block cursor-pointer sm:w-auto sm:h-10 md:h-12"
          width={400}
          height={400}
          priority
        />
      )}
    </>
  );
};

export default Logo;
