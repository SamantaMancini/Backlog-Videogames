import { request } from "../utils/axios-utils";
import { useState, useEffect } from "react";

export const useFetchGames = (filters) => { // Set default name to empty string
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await request({
          url: `/api/v1/games`,
          method: 'get',
          params: filters, // Send null for empty name
        });
        setGames(response.data.games);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]); // Dependency on name only

  return { games, isLoading, error };
};