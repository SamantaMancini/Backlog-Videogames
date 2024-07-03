import { request } from "../utils/axios-utils";

export const useCreateGames = (data) => {
    request({
        url: `/api/v1/games`,
        method: 'post',
        data
      });
};
