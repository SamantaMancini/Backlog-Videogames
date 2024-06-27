import { request } from "../utils/axios-utils";


export const useEditGames = (id) => {
        request({
          url: `/api/v1/games/${id}`,
          method: 'post',
        });
    };

