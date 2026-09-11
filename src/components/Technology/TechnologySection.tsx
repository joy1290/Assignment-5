import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../type/Technology";

type Props = {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
};

function TechnologySection({ stack, onAdd }: Props) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
      });
  }, []);

  return (
    <div>
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the <span className="text-pink-500">Technologies</span>
          
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Pick technology categories to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => {
          const isSelected = stack.some(
            (item) => item.id === technology.id
          );

          return (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={onAdd}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechnologySection;