import type { Technology } from "../type/Technology";

type Props = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
};

function TechnologyCard({
  technology,
  onAdd,
  isSelected,
}: Props) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md">

      
      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-md ${technology.color}`}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
          {technology.badge}
        </span>
      </div>

    
      <h3 className="mt-3 text-sm font-bold text-gray-900">
        {technology.name}
      </h3>

      
      <p className="mt-1 text-[9px] font-medium text-gray-400">
        {technology.category}
      </p>

      
      <p className="mt-3 min-h-[40px] text-[10px] leading-4 text-gray-500">
        {technology.description}
      </p>

    
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>

          <span className="text-[9px] text-gray-500">
            {technology.rating}
          </span>
        </div>

        <span className="text-[9px] text-gray-400">
          {technology.difficulty}
        </span>
      </div>

      
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isSelected}
        className={`mt-3 w-full rounded-md py-2 text-[10px] font-medium transition ${
          isSelected
            ? "cursor-not-allowed bg-green-500 text-white"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {isSelected ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;