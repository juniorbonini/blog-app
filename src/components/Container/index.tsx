import { ContainerInterface } from "@/interfaces/Container/container-interface";
import clsx from "clsx";

export function Container({ children, containerClass }: ContainerInterface) {
  return (
    <div
      className={clsx(
        "text-slate-200 bg-slate-800 min-h-screen",
        containerClass,
      )}
    >
      <div className="mx-auto max-w-screen-5xlpx-8">{children}</div>
    </div>
  );
}
