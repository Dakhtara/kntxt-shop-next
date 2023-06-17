export type SelectProps = {
  label: string;
  options: string[];
};

export default function Select({ label, options }: SelectProps) {
  return (
    <div>
      <label className="flex flex-col">
        {label}
        <select name={label} className="text-black rounded px-2 py-2">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
