import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

export function AdminCard({ form }: any) {
  return (
    <Link
      href={`/admin/form/${form.id}`}
      className="bg-black/40 border border-purple-700 hover:border-purple-400 transition-all rounded-xl p-5 shadow-[0_0_15px_rgba(147,51,234,0.4)] backdrop-blur-lg"
    >
      <h3 className="text-xl text-purple-300 font-semibold">{form.name}</h3>
      <p className="text-gray-300">{form.company}</p>

      <div className="mt-2">
        <StatusBadge status={form.status} />
      </div>
    </Link>
  );
}
