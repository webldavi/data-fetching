import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

export function Repo() {
  const { name } = useParams();
  const queryClient = useQueryClient();

  function validate() {
    console.log("atualizando cache");

    const prevCache = queryClient.getQueryData("apiRepos");

    if (prevCache) {
      const newRepositoriesCache = prevCache.map((cachItem) => {
        return cachItem.name === name
          ? { ...cachItem, full_name: "Testando" }
          : cachItem;
      });

      queryClient.setQueryData("apiRepos", newRepositoriesCache);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold font-mono">Hello {name}</h1>
      <button
        onClick={validate}
        className="w-max h-max p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
      >
        Validate
      </button>
    </div>
  );
}
