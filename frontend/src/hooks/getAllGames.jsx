import { request } from "../utils/axios-utils";
import { useState, useEffect } from "react";

export const useFetchGames = (filters) => { // Set default name to empty string
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await request({
          url: `/api/v1/games?limit=10&page=${currentPage}`,
          method: 'get',
          params: filters, // Send null for empty name
        });
        setGames(response.data.games);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters, currentPage]); // Dependency on name only

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { games, isLoading, error, currentPage, totalPages, handlePageChange };
};