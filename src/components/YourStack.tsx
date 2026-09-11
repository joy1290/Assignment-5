import type { Technology } from "./type/Technology";

type Props = {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: Props) {
  return (
    <aside className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

    
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          {stack.length} Technology
          {stack.length !== 1 ? "s" : ""} Selected
        </p>
      </div>

      
      <div className="mt-5 space-y-2">

        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 px-4 py-8 text-center">

            <div className="text-3xl">
              🧩
            </div>

            <p className="mt-2 text-sm font-medium text-gray-500">
          Your Stack is Empty.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Add technologies from the list
            </p>

          </div>
        ) : (
          stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-3"
            >

              
              <div className="flex items-center gap-3">

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${technology.color} text-sm font-bold text-white`}
                >
                  {technology.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {technology.name}
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

              </div>

              
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="text-2xl leading-none text-gray-400 transition hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>
          ))
        )}

      </div>

      
      {stack.length > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </aside>
  );
}

export default YourStack;