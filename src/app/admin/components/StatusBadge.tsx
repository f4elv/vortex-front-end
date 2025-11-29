export function StatusBadge({ status }: { status: string }) {
  const colors: any = {
    novo: "bg-blue-600",
    respondido: "bg-green-600",
    em_andamento: "bg-yellow-600",
    cancelado: "bg-red-600",
    finalizado: "bg-purple-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${colors[status]}`}>
      {status}
    </span>
  );
}
