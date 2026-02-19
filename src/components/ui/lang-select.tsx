import { useLangStore } from "@/store";
import { langData } from "@/store/lang.data";

const LangSelect = () => {
  const { lang, onChangeLang } = useLangStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeLang(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <select
        value={lang}
        onChange={handleChange}
        className="
          appearance-none
          bg-white
          border border-gray-300
          rounded-xl
          px-4 py-2 pr-10
          text-sm font-medium
          shadow-sm
          hover:border-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          cursor-pointer
        "
      >
        {langData.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        ▼
      </div>
    </div>
  );
};

export { LangSelect };
