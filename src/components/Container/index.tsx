import { ContainerInterface } from "@/interfaces/Container/container-interface";
import clsx from "clsx";

export function Container({ children, containerClass }: ContainerInterface) {
  return (
    <div
      className={clsx(
        "text-primary bg-background min-h-screen",
        containerClass,
      )}
    >
      <div className="mx-auto max-w-screen-5xl px-8 py-8">{children}</div>
    </div>
  );
}
