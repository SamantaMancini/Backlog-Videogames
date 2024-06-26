import { request } from "../utils/axios-utils";

export const useCreateGames = () => {
        return request({
          url: `/api/v1/games`,
          method: 'post'
        });
  };
