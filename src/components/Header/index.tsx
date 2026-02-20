import Link from "next/link";

import { HeaderInterface } from "@/interfaces/Header/header-interface";

export function Header({ children, className }: HeaderInterface) {
  return (
    <header>
      <h1
        className={`
            text-4xl/normal font-extrabold py-8
            w-fit-content
            sm:text-5xl/normal sm:py-10
            md:text-6xl md:py-11
            lg:text-7xl lg:py-12
            ${className ?? ""}
            `}
      >
        <Link href="#" className="hover:text-gray-500 transition duration-400">
          {children}
        </Link>
      </h1>
    </header>
  );
}
