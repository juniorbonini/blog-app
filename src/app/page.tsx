import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <SpinLoader containerClass={clsx("min-h-[500px] bg-amber-500")} />
    </>
  );
}
