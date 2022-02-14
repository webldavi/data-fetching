import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function useFetch(baseUrl, url, method, options) {
  const urls = {
    apiRepos: "https://api.github.com/",
  };
  const { data, isFetching } = useQuery(
    baseUrl,
    async () => {
      const response = await axios[method](`${urls[baseUrl]}${url}`, options);
      return response.data;
    },
    { staleTime: 1000 * 60 }
  );
  return { data, isFetching };
}
