export function Select({
  value,
  onChange,
  children,
  label,
}: {
  value: number;
  label: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="cursor-pointer group transition flex items-center justify-center ease-in bg-gray-700 h-8 hover:bg-gray-800 rounded px-2 shadow-md disabled:opacity-50">
      <select
        className="bg-gray-700 cursor-pointer group-hover:bg-gray-800 ease-in transition"
        aria-label={label}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </label>
  );
}
