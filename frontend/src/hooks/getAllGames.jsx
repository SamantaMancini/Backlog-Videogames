import { useState, useEffect } from "react";
import { request } from "../utils/axios-utils";

export const useFetchGames = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await request({
          url: '/api/v1/games',
          method: 'get'
        });
        setGames(response.data.data.games);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return { games, isLoading, error };
};