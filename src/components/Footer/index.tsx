import Link from "next/link";

export function Footer() {
  return (
    <div>
      <footer className={"text-center pb-16"}>
        <p className="text-3xl">
          Feito e produzido por{" "}
          <Link
            href="https://github.com/juniorbonini/blog-app"
            target="_blank"
            className={`
                     relative inline-block text-primary hover:text-indigo
                     transition-colors duration-500 z-0 before:content-['']
                     before:absolute before:inset-0 before:bg-primary/5
                     before:scale-x-0 before:rounded-sm  before:py-1
                     before:origin-left before:transition-transform
                     before:duration-500 hover:before:scale-x-100
                    `}
          >
            Junior Bonini
          </Link>
        </p>
      </footer>
    </div>
  );
}
