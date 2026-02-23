import clsx from "clsx";

export default function NotFound() {
  return (
    <div
      className={clsx(
        `min-h-80 bg-background-secondary text-primary mb-16 rounded-xl p-8 flex items-center justify-center text-center`,
      )}
    >
      <div>
        <p>Erro 404 - A página não encontrada</p>
      </div>
    </div>
  );
}
