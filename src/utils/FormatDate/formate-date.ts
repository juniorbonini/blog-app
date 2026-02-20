import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(rawDate: string) {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy HH:mm", {
    locale: ptBR,
  });
}

export function formatRelativeDate(rawDate: string) {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
