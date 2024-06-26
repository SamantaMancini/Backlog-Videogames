import { request } from "../utils/axios-utils";

export const useEditGames = ({id}) => {

    const editData = () => {
        return request({
          url: `/api/v1/games/${id}`,
          method: 'post',
        });
    };

    editData();
  };
