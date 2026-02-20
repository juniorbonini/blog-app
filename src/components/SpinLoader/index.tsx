import clsx from "clsx";

import { SpinLoaderInterface } from "@/interfaces/SpinLoader/spinLoader-interface";

export function SpinLoader({ containerClass }: SpinLoaderInterface) {
  return (
    <div className={clsx(`flex items-center justify-center`, containerClass)}>
      <div
        className={clsx(
          `w-10 h-10 border-5  border-t-transparent border-slate-900 rounded-full animate-spin`
        )}
      ></div>
    </div>
  );
}
