import { Link } from "react-router-dom";

export function Repositories({ repositories, isFetching }) {
  return (
    <>
      {isFetching && <p>Carregando...</p>}
      {repositories.map((el) => (
        <div
          className="w-mfull h-max text-center flex flex-col justify-center align-center text-white font-bold border-2 p-4 border-green-500 rounded-lg"
          key={el.id}
        >
          <Link to={`/${el.name}`}>
            <h1>{el.full_name}</h1>
          </Link>
          <p className="font-normal">{el.description}</p>
        </div>
      ))}
    </>
  );
}
