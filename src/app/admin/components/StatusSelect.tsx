export function StatusSelect({ value, onChange }: any) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-3 bg-black/50 border border-purple-600 rounded-xl"
    >
      <option value="novo">Novo</option>
      <option value="respondido">Respondido</option>
      <option value="em_andamento">Em andamento</option>
      <option value="cancelado">Cancelado</option>
      <option value="finalizado">Finalizado</option>
    </select>
  );
}
