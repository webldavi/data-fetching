import { Repositories } from "../components/Repositories";
import { useFetch } from "../hooks/useFetch";

function Repos() {
  const { data: repositories = [], isFetching } = useFetch(
    "apiRepos",
    "users/webldavi/repos",
    "get"
  );

  return (
    <div className="w-full min-h-screen p-4 flex flex-col gap-8 justify-center align-center text-white bg-gray-900">
      <Repositories repositories={repositories} isFetching={isFetching} />
    </div>
  );
}

export default Repos;
