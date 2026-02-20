import { HeaderInterface } from "@/interfaces/Header/header-interface";

export function Header({ children }: HeaderInterface) {
  return (
    <header>
      <h1
        className={`
            text-4xl/normal font-extrabold py-8
            sm:text-5xl/normal sm:py-10
            md:text-6xl md:py-11
            lg:text-7xl lg:py-12`}
      >
        {children}
      </h1>
    </header>
  );
}
