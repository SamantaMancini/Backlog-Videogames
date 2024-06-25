import { useState, useEffect } from "react";
import { request } from "../utils/axios-utils";

export const useFetchGames = (name) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await request({
          url: `/api/v1/games`,
          method: 'get',
          params: {'name': name === "" ? null : name}
        });
        setGames(response.data.games);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [name]);

  return { games, isLoading, error };
};