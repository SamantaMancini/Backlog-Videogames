import { request } from "../utils/axios-utils";

export const useCreateGames = () => {

    const addData = () => {
      setIsLoading(true);
        return request({
          url: `/api/v1/games`,
          method: 'post'
        });
    };

    addData();
  };
